async function Finder() {
    const username = document.getElementById("username").value.trim().toLowerCase();
    const resultDiv = document.getElementById("result");
  
    
  
    const url = `https://api.github.com/users/${username}`;
  
    try {
      
  
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error("Utilizatorul nu a fost găsit.");
      }
  
      const data = await response.json();
  
      // Afișare în pagină (manipulare DOM)
      resultDiv.innerHTML = `
        <div style="text-align: center;">
          <img src="${data.avatar_url}" width="120" style="border-radius: 50%;" alt="avatar">
          <h2>${data.name || "Nume indisponibil"}</h2>
          <p><strong>Username:</strong> ${data.login}</p>
          <p><strong>Followers:</strong> ${data.followers}</p>
          <p><strong>Bio:</strong> ${data.bio || "Fără bio"}</p>
          <a href="${data.html_url}" target="_blank">Vezi profilul pe GitHub</a>
        </div>
      `;
    } catch (err) {
      resultDiv.innerHTML = `<p style="color:red;">${err.message}</p>`;
    }
  }
  