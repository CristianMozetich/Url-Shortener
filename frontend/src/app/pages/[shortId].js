export async function getServerSideProps({ params }) {
    const { shortId } = params;
    const res = await fetch(`https://simple-link-back.vercel.app/${shortId}`);
    const data = await res.json();
    return { props: { data } };
    
}
