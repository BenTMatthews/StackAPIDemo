async function getStackExchangeUsers() {
    const apiUrl =
      'https://api.stackexchange.com/2.3/users?order=desc&sort=reputation&site=stackoverflow';
  
    // Make the API call
    const response = await fetch(apiUrl);
  
    // Parse the response into JavaScript objects
    const data = await response.json();
    const usersResponse = data.items.map((item) => ({
      accountId: item.account_id,
      displayName: item.display_name,
      location: item.location,
      profileImage: item.profile_image,
      reputation: item.reputation,
      employee: item.is_employee,
      badgeCounts: {
        gold: item.badge_counts.gold,
        silver: item.badge_counts.silver,
        bronze: item.badge_counts.bronze,
      },
    }));
  //   console.log(usersResponse);
    show(usersResponse);
  }
  
  getStackExchangeUsers();
  
  function show(data) {
    let table = `<tr>
            <th>Account ID</th>
            <th>Display Name</th>
            <th>Profile Image</th>
            <th>Reputation</th>
            <th>Employee</th>
            <th>Location</th>
            <th>Badge Counts</th>
           </tr>`;
  
    // Loop to access all rows
    for (let user of data) {
      table += `<tr> 
      <td>${user.accountId} </td>
      <td>${user.displayName}</td>
      <td><image width="200px" height="auto" src=${
        user.profileImage
      }></image></td> 
      <td>${user.reputation}</td>        
      <td>${user.employee ? 'Yes' : 'No'}</td>
      <td>${user.location}</td>
      <td>gold: ${user.badgeCounts.gold} <br/> silver: ${
        user.badgeCounts.silver
      } <br/> bronze: ${user.badgeCounts.bronze}</td>
  </tr>`;
    }
    document.getElementById('userTable').innerHTML = table;
  }