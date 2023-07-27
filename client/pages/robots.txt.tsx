/** @format */

const generateRobotsTxt = (baseUrl: string): string => {
    let robotsContent = ``;

    robotsContent += `User-agent: *\n`;
    robotsContent += `Allow: /\n`;
    robotsContent += `\nSitemap: ${baseUrl}/sitemap_index.xml\n`;

    return robotsContent;
};

const Robots = () => {};

export const getServerSideProps = async ({ res }) => {

    const robotsContent = generateRobotsTxt(process.env.NEXT_PUBLIC_BASE_URL);

    res.setHeader("Content-Type", "text/plain");
    res.write(robotsContent);
    res.end();

    return {
        props: {},
    };
};

export default Robots;
