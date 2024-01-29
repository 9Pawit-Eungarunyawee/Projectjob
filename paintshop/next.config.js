/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "static.wixstatic.com",
      "www.beger.co.th",
      "d1an7elaqzcblb.cloudfront.net",
      "www.dohome.co.th",
      "images.akzonobel.com",
      "www.toagroup.com",
      "upload.wikimedia.org",
      "cx.lnwfile.com"
    ],
  },
  distDir: "nextjs",
  output: "export",
};

module.exports = nextConfig;
