export default function sitemap() {
  // Define the base URL of your website
  const baseUrl = 'https://www.yourdomain.com'; // NOTE: User will update this domain later

  // List all the static routes of the NexGo website
  const routes = [
    '',
    '/about',
    '/services',
    '/services/home-shifting',
    '/services/office-shifting',
    '/services/villa-movers',
    '/services/commercial-moving',
    '/services/loading-unloading',
    '/services/packing-unpacking',
    '/services/warehouse-services',
    '/services/insurance-services',
    '/blog',
    '/contact',
    '/quote',
  ];

  // Map over the routes to generate the sitemap objects
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
