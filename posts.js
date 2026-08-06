document.addEventListener("DOMContentLoaded", function () {
  let posts = [
    {
      title: "IBPS Clerk 16th Online Form 2026",
      category: "latest-jobs",
      link: "latest%20job/IBPS%20Clerk%20(CSA)%2016th.html"
    },
    {
      title: "RRB Group D Recruitment 2026",
      category: "latest-jobs",
      link: "post.html"
    },
    {
      title: "SSC GD Exam Result 2026",
      category: "latest-results",
      link: "result.html"
    },
    {
      title: "Railway Group D Admit Card 2026",
      category: "admit-card",
      link: "admit-card.html"
    }
  ];

  // Auto Distribution System
  posts.forEach(function (post) {
    let container = document.getElementById(post.category);

    if (container) {
      container.innerHTML += `
        <tr>
          <td>
            <a href="${post.link}" class="job-link">${post.title}</a>
          </td>
          <td style="text-align: right; width: 60px;">
            <a href="${post.link}" class="btn-view">View</a>
          </td>
        </tr>
      `;
    }
  });
});
