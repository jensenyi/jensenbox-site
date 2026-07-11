# Jensen Yi Personal Site

Static personal website for `https://jensenbox.cn`, deployed to Alibaba Cloud OSS.

## Automatic deployment

Every push to `main` runs `.github/workflows/deploy-oss.yml` and uploads the website files to the OSS bucket.

Configure these GitHub Actions repository secrets before the first run:

- `ALIYUN_ACCESS_KEY_ID`
- `ALIYUN_ACCESS_KEY_SECRET`

Use a dedicated RAM user limited to this bucket. Never commit the secret or place it in website files.

The workflow uploads files but does not delete old OSS objects, preserving verification files and reducing accidental data loss.
