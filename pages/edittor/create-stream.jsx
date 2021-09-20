import { useState, useEffect } from 'react';
import {useRouter} from 'next/router'

const edittor = () => {
    const router = useRouter();
    const [link,setLink]=useState();
    const [title, setTitle] = useState();
    const stream_details = {
        title,
        url:link,
        main:true

    }
    const sendStream = () => {
        if (link != '' && title != '') {
            fetch('https://vb-backend.herokuapp.com/add-stream', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(stream_details)
            })
            .then(router.push('/admin/panel'))
        } else alert('Add a title and paragraph')

    }

    return (
        <div className="edittor-container">
            <div className="edittor-wrapper">
                <div className="control-container">
                    <span onClick={(e) => { setPar(`${paragraph}** new paragraph **`) }}><i className="ri-add-circle-line"></i> Add new paragraph</span>
                    <span onClick={sendStream}><i className="ri-send-plane-2-fill"></i> Post Stream</span>
                </div>
                <div className="edittor">
                    <textarea placeholder="Stream Title" className="title" onChange={(e) => { setTitle(e.target.value) }} value={title}></textarea>
                    <input type="text" placeholder="Input Youtube link" onChange={(e) => { setLink(e.target.value) }} value={link} />

                </div>
            </div>



        </div>

    );
}

export default edittor;