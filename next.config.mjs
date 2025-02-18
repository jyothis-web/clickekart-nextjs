/** @type {import('next').NextConfig} */
const nextConfig = {
     images: {
       domains: ["s3.ap-south-1.amazonaws.com"], // Allow images from your S3 bucket
     },
   };
   
   export default nextConfig;
   