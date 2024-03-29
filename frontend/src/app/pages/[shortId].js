export async function getServerSideProps({ params }) {
    const { shortId } = params;
    const res = await fetch(`http://localhost:3001/api/url/${shortId}`);
    const data = await res.json();
    return { props: { data } };
    
}
