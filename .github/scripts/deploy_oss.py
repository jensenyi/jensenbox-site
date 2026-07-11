import mimetypes
import os
from pathlib import Path

import oss2


root = Path(__file__).resolve().parents[2]
endpoint = os.environ["OSS_ENDPOINT"]
bucket_name = os.environ["OSS_BUCKET"]
auth = oss2.Auth(
    os.environ["ALIYUN_ACCESS_KEY_ID"],
    os.environ["ALIYUN_ACCESS_KEY_SECRET"],
)
bucket = oss2.Bucket(auth, endpoint, bucket_name)

excluded = {".git", ".github", "node_modules", "dist"}
files = [
    path
    for path in root.rglob("*")
    if path.is_file() and not any(part in excluded for part in path.parts)
]

for path in files:
    key = path.relative_to(root).as_posix()
    content_type = mimetypes.guess_type(key)[0] or "application/octet-stream"
    headers = {"Content-Type": content_type}
    bucket.put_object_from_file(key, str(path), headers=headers)
    print(f"uploaded {key}")

print(f"Uploaded {len(files)} files to oss://{bucket_name}/")
