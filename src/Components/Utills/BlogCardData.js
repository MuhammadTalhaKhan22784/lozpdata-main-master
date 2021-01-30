import React from 'react'
import { Link } from 'react-router-dom'
import '../../Pages/Styles/Resources.css'
const BlogCardData = () => {
    return (
        <>
            <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                <Link to="/blog-card-1">
                    <div className="blog-card card" style={{ width: "22rem" }}>
                        <img alt="img" src="https://www.cubix.co/storage/app/uploads/public/600/5a3/774/thumb_850_500_300_0_0_auto.jpg" className="card-img-top" />
                        <div className="blog-card-body card-body">
                            <h5 className="fs-5 card-title">GROWTH</h5>
                            <p className="fs-5 pt-2 card-text">Waterfall vs Agile Development: Which is the Best Methodology for You?</p>
                            <div className="blg-icon-1 pt-2">
                                <img alt="img" src="data:image/png;base64,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" />
                                <span className="ms-2 fs-6">April 07, 2020 09:27</span>
                            </div>
                            <div className="blg-icon-2 mt-3">
                                <div>
                                    <img alt="img" src="https://img.icons8.com/plasticine/2x/clock.png" />
                                    <span className="ms-2 fs-6">5 min Read</span>
                                </div>
                                <div className="pe-5">
                                    <img alt="img" src="https://www.freeiconspng.com/thumbs/eye-icon/eyeball-icon-png-eye-icon-1.png" />
                                    <span className="ms-2 fs-6">353 Views so far</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default BlogCardData
