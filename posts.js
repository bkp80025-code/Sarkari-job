let posts = [

{
title:"RRB Group D Recruitment 2026",
category:"Latest Jobs",
link:"post.html"
},
{
title:"IBPS Clerk 16th CRecruitment 2026",
category:"Latest Jobs",
link:"latest job/IBPS Clerk (CSA) 16th.html"
},

{
title:"SSC GD Result 2026",
category:"Result",
link:"result.html"
}

];


document.getElementById("postList").innerHTML =
posts.map(function(post){

return `
<tr>
<td>${post.title}</td>
<td>
<a href="${post.link}">View</a>
</td>
</tr>
`;

}).join("");
