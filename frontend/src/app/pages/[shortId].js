export async function getServerSideProps({ params }) {
    const { shortId } = params;
    const res = await fetch(`https://url-shortener-server-five.vercel.app/${shortId}`);
    const data = await res.json();
    return { props: { data } };
    
}
