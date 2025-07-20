
export default function BackToTop({ scroll }) {

    return (
        <>
            {scroll && (
                <a className="scroll-top scroll-to-target" href="#top">
                    <i className="far fa-angle-up"></i>
                </a>
                
            )}
        </>
    )
}