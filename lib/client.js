import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'cdxuhlw3',
    dataset: 'production',
    apiversion: '2023-01-25',
    useCdn: 'true',
    token: 'sktDHiMy0wmjCtiscSS3SkfAvMdBhvDaCvDIzwcyqNXqzQPxXHXRXQLccRG6tEJSJou5EmzrDKVXL7nBdnBl38i9CWMK8UylAl7p5uwrZvOr4Ifa4Wgy9PFLeorz20XKm4xKKOYRr9Sbj2f5OIFe5zSrwGWeQIi6llMSUDf68Ti61WWL2aaJ'
});


const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);