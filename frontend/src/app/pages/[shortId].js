export async function getServerSideProps({ params }) {
    const { shortId } = params;
    const res = await fetch(`https://url-shortener-2-z4nr.onrender.com/${shortId}`);
    const data = await res.json();
    return { props: { data } };
    
}
