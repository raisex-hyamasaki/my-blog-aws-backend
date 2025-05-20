// プロジェクトルート/config/plugins.ts
export default ({ env }: { env: (key: string) => string }) => {
  // ✅ デバッグ用出力
  console.log('[DEBUG] AWS_ACCESS_KEY_ID:', env('AWS_ACCESS_KEY_ID'));
  console.log('[DEBUG] AWS_SECRET_ACCESS_KEY:', env('AWS_SECRET_ACCESS_KEY'));
  console.log('[DEBUG] AWS_REGION:', env('AWS_REGION'));
  console.log('[DEBUG] AWS_BUCKET_NAME:', env('AWS_BUCKET_NAME'));

  const region = env('AWS_REGION');
  const bucket = env('AWS_BUCKET_NAME');

  return {
    i18n: true,
    'strapi-plugin-ja-pack': {
      enabled: true,
    },
    upload: {
      config: {
        provider: '@strapi/provider-upload-aws-s3',
        providerOptions: {
          baseUrl: `https://${bucket}.s3.${region}.amazonaws.com`, // ← ✅ プレビュー用URL
          s3Options: {
            accessKeyId: env('AWS_ACCESS_KEY_ID'),
            secretAccessKey: env('AWS_SECRET_ACCESS_KEY'),
            region: region,
            params: {
              Bucket: bucket,
              ACL: undefined, // ← ACL 明示的にオフ
            },
          },
        },
      },
    },
  };
};