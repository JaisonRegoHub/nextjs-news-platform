export function GET() {
  return new Response('Handling GET Request');
}

export async function POST(request) {
  const body = await request.json();
  console.log('Received POST:', body);

  return new Response('POST received');
}
