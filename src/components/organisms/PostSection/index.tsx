import React from 'react'
import ImagePost from "../../moleculs/ImagePost";
import IdentityPost from "../../moleculs/IdentityPost";

const PostSection = () => {
    return (
        <div className="row rounded-bottom bg-white p-0 p-md-4">
            <div className="col-12">
                <ImagePost />
            </div>
            <div className="col-12">
                <IdentityPost />
            </div>
        </div>
    )
}
export default PostSection
