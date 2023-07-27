/** @format */
import { projectsConfig } from "@/config/projectsConfig";

export const generateSitemap = (baseUrl: string): string => {
  const content = projectsConfig
    .map((project) => {
      const { id } = project;
      const url = `${baseUrl}/${id}/details`;
      const projectXml = `<url><loc>${url}</loc></url>`;
      return projectXml;
    })
    .join("");

  return `<?xml version="1.0"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
  </url>${content}</urlset> `;
};

const Sitemap = () => {};

export const getServerSideProps = async ({ res }) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const sitemap = generateSitemap(baseUrl);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
