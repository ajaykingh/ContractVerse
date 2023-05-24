// import React, { useState } from 'react';

// function ManageProfile() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');

//   const handleNameChange = event => {
//     setName(event.target.value);
//   }

//   const handleEmailChange = event => {
//     setEmail(event.target.value);
//   }

//   const handleSubmit = event => {
//     event.preventDefault();
//     console.log(`Name: ${name}, Email: ${email}`);
//   }

//   return (
//     <div>
//       <h2>Manage Profile</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={name} onChange={handleNameChange} />
//         </label>
//         <label>
//           Email:
//           <input type="email" value={email} onChange={handleEmailChange} />
//         </label>
//         <button type="submit">Save Changes</button>
//       </form>
//     </div>
//   );
// }

// export default ManageProfile;

import React, { useState, useEffect } from 'react';

const ManageProfile = () => {
  const [profiles, setProfiles] = useState([]);
  const [newProfile, setNewProfile] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Fetch profiles from an API or database
    // Example: fetchProfiles()
     //setProfiles(null)
  }, []);

  const handleAddProfile = () => {
    // Add the new profile to the profiles list
    // Example: addProfile({ name: newProfile, image: selectedImage })
    setProfiles([...profiles, { name: newProfile, image: selectedImage }])

    // Clear the new profile input field and selected image
    setNewProfile('');
    setSelectedImage(null);
  };

  const handleDeleteProfile = (profileId) => {
    // Delete the profile with the given ID from the profiles list
    // Example: deleteProfile(profileId)
     setProfiles(profiles.filter(profile => profile.id !== profileId))
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  return (
    <div className='container card col-md-4 bg-dark mt-3'>
      <h1 className=' mt-3 bg-dark text-info'>Profile Manager</h1>

      <div className='container mt-3'>
        <input
          type="text"
          value={newProfile}
          onChange={(e) => setNewProfile(e.target.value)}
          placeholder="Enter profile name"
        />
        <hr/>

        <input type="file"  accept="image/*"  placeholder='avtar' onChange={handleImageUpload} />
        <hr/>

        <button  className='bg-success card ' onClick={handleAddProfile}>Save Changes </button>
      </div>
      <hr/>

      <ul>
        {profiles.map((profile) => (
          <li key={profile.id}>
            <span>{profile.name}</span>
            {profile.image && (
              <img src={URL.createObjectURL(profile.image)} alt="Profile" />
            )}
            <button onClick={() => handleDeleteProfile(profile.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageProfile;
