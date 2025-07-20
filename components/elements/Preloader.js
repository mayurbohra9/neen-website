
export default function Preloader() {
    return (
        <>

        <div className="loader-wrap">
            <div className="preloader">
                <div id="handle-preloader" className="handle-preloader">
                    <div className="animation-preloader">
                        <div className="spinner"></div>
                        <div className="txt-loading">
                            <span data-text-preloader="n" className="letters-loading">
                                N
                            </span>
                            <span data-text-preloader="e" className="letters-loading">
                                E
                            </span>
                            <span data-text-preloader="e" className="letters-loading">
                                E
                            </span>
                            <span data-text-preloader="n" className="letters-loading">
                                N
                            </span>
                        </div>
                    </div>  
                </div>
            </div>
        </div>


        </>
    )
}
