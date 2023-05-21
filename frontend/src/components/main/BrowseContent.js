import React, { useEffect, useState } from "react";


    const BrowseContent = () => {
  const [contentList, setContentList] = useState([]);

  const fetchContentData = async () => {
    const res = await fetch("http://localhost:5000/content/getall");
    const data = await res.json();
    console.log(data);
    setContentList(data);
  };

  useEffect(() => {
    fetchContentData();
  }, []);

  const deleteUser = async (id) => {
    console.log(id);
    const res = await fetch('http://localhost:5000/content/delete/' + id, { method: 'DELETE' });
    if(res.status === 200) {
      fetchContentData();
    }
  }

  return (
    <div>

<div className="card">
  <h5 className="card-header">Featured</h5>
  <div className="card-body">
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">
      With supporting text below as a natural lead-in to additional content.
    </p>
    <a href="#" className="btn btn-primary">
      Go somewhere
    </a>
  </div>
</div>

    </div>
  )
}

export default BrowseContent;