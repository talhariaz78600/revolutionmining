"use client"
import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { comment } from 'postcss';
const Comment = ({ id }) => {
    const [data, setData] = useState({ username: "", email: "", comment: "" })
    const [loader, setLoader] = useState(false);
    const onchange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const submit = async (e) => {
        e.preventDefault();
        console.log(data);
        try {
            
            if(data.email!=="" || data.comment!=="" || data.username!==""){
                setLoader(true);
                
                const response= await axios.put(`https://revolutionbackend.vercel.app/api/blog/createComment/${id}`,{
                    name:data.username,
                    email:data.email,
                    comment:data.comment
                })
                console.log(response);
                if(response.status===200){
                    setLoader(false)
                    setData({ username: "", email: "", comment: "" });
                    toast.success("Comment add successfully")
    
                }
                
    
            }
        } catch (error) {
            toast.error(error.message);
            setLoader(false)
        }


    }
    return (
        <div>
            <div className="article-template__comment-wrapper background-secondary">
                <div id="comments" className="page-width page-width--narrow">
                    <form onSubmit={submit} className="comment-form">
                        <input type="hidden" name="form_type" value="new_comment" />
                        <input type="hidden" name="utf8" value="✓" />
                        <h2>Leave a comment</h2>
                        <div>
                            <div className="article-template__comment-fields my-4">
                                <div className="field field--with-error my-4">
                                    <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        className="field__input"

                                        required
                                        onChange={onchange}
                                        value={data.username}

                                        autocorrect="off"
                                        autocapitalize="off"
                                        aria-required="true"
                                        placeholder="Name"
                                    />
                                    <label className="field__label" htmlFor="CommentForm-author">Name <span aria-hidden="true">*</span></label>
                                </div>
                                <div className="field field--with-error my-4">
                                    <input
                                        type="email"
                                        name="email"
                                        id="CommentForm-email"
                                        autoComplete="email"
                                        className="field__input"
                                        autocorrect="off"
                                        autocapitalize="off"
                                        aria-required="true"
                                        placeholder="Email"
                                        onChange={onchange}
                                        value={data.email}
                                        required
                                    />
                                    <label className="field__label" htmlFor="CommentForm-email">Email <span aria-hidden="true">*</span></label>
                                </div>
                            </div>
                            <div className="field field--with-error my-4">
                                <textarea
                                    rows="5"
                                    name="comment"
                                    id="CommentForm-body"
                                    className="text-area field__input"
                                    aria-required="true"
                                    onChange={onchange}
                                    required
                                    placeholder="Comment"
                                    value={data.comment}
                                ></textarea>
                                <label className="form__label field__label" htmlFor="CommentForm-body">Comment <span aria-hidden="true">*</span></label>
                            </div>
                        </div>
                        <p className="article-template__comment-warning caption my-3">Please note, comments need to be approved before they are published.</p>
                        <button type="submit" className="button my-3" value="Post comment" disabled={loader}>{loader ? <div
                            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-secondary motion-reduce:animate-[spin_1.5s_linear_infinite]"
                            role="status">
                            <span
                                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                            >Loading...</span
                            >
                        </div> : "Post comment"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Comment;
