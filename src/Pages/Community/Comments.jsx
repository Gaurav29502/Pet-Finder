import { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import { FaTwitter } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaMailBulk } from 'react-icons/fa'
import { IconContext } from "react-icons";

import {
    getComments as getCommentsApi,
    createComment as createCommentApi,
    updateComment as updateCommentApi,
    deleteComment as deleteCommentApi,
} from "./api";

export const Comments = ({ commentsUrl, currentUserId }) => {
    const [backendComments, setBackendComments] = useState([]);
    const [activeComment, setActiveComment] = useState(null);
    const rootComments = backendComments.filter(
        (backendComment) => backendComment.parentId === null
    );
    const getReplies = (commentId) =>
        backendComments
            .filter((backendComment) => backendComment.parentId === commentId)
            .sort(
                (a, b) =>
                    new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
            );
    const addComment = (text, parentId) => {
        createCommentApi(text, parentId).then((comment) => {
            setBackendComments([comment, ...backendComments]);
            setActiveComment(null);
        });
    };

    const updateComment = (text, commentId) => {
        updateCommentApi(text).then(() => {
            const updatedBackendComments = backendComments.map((backendComment) => {
                if (backendComment.id === commentId) {
                    return { ...backendComment, body: text };
                }
                return backendComment;
            });
            setBackendComments(updatedBackendComments);
            setActiveComment(null);
        });
    };
    const deleteComment = (commentId) => {
        if (window.confirm("Are you sure you want to remove comment?")) {
            deleteCommentApi().then(() => {
                const updatedBackendComments = backendComments.filter(
                    (backendComment) => backendComment.id !== commentId
                );
                setBackendComments(updatedBackendComments);
            });
        }
    };

    useEffect(() => {
        getCommentsApi().then((data) => {
            setBackendComments(data);
        });
    }, []);

    return (
        <div className="maint" style={{ 'height': '100vh' }}>
            <nav className="navbarHome">
                <div className="topLogo">
                    <h1 className="pawshunger">Paws Hunger</h1>
                </div>
                <div className="menu">
                    <a className="menuItem" href="/">
                        HOME
                    </a>
                    <a className="menuItem" href="#">
                        TRACK
                    </a>
                    <a className="menuItem" href="/donations">
                        DONATIONS
                    </a>
                    <a className="menuItem" href="#">
                        VETS
                    </a>
                    <a className="menuItem" href="/petcare">
                        PETCARE
                    </a>
                    <a className="menuItem" href="/Comments">
                        COMMUNITY
                    </a>
                </div>
            </nav>
            <div className="comments" style={{ 'height': '78vh' }}>
                <div className="introText1">
                    <h3 className="comments-title">Forum</h3>
                </div>
                <div className="comment-form-title">Write comment</div>
                <CommentForm submitLabel="Submit" handleSubmit={addComment} />
                <div className="comments-container">
                    {rootComments.map((rootComment) => (
                        <Comment
                            key={rootComment.id}
                            comment={rootComment}
                            replies={getReplies(rootComment.id)}
                            activeComment={activeComment}
                            setActiveComment={setActiveComment}
                            addComment={addComment}
                            deleteComment={deleteComment}
                            updateComment={updateComment}
                            currentUserId={currentUserId}
                        />
                    ))}
                </div>
            </div>


            <div className="footerDiv" style={{ 'height': '10vh' }}>
                <footer className="footerTeams">
                    <IconContext.Provider value={{ size: "3em" }}>
                        <div className="shareiconsTeams">
                            <a className="socialIconsTeams" href="https://m.facebook.com/">
                                <FaFacebook className="facebook" />
                            </a>
                            <a className="socialIcons" href="https://www.instagram.com//">
                                <FaInstagram className="insta" />
                            </a>
                            <a className="socialIcons" href="https://twitter.com/">
                                <FaTwitter className="twitter" />
                            </a>
                            <a className="socialIcons" href="https://www.linkedin.com/company/iete-">
                                <FaLinkedin className="linkedin" />
                            </a>
                            <a className="socialIcons" href="mailto: @gmail.com">
                                <FaMailBulk />
                            </a>
                        </div>
                    </IconContext.Provider>
                    <p className="footerText">Paws Hunger© 2022 All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
};