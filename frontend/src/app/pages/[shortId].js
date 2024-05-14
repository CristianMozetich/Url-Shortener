export async function getServerSideProps({ params }) {
    const { shortId } = params;
    const res = await fetch(`https://url-simple.vercel.app/${shortId}`);
    const data = await res.json();
    return { props: { data } };
    
}
