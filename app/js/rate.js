function rate(container) {
  let star_container = document.querySelectorAll(container);

  for (let count = 0; count < star_container.length; count++) {
    let star_rate_count = Math.trunc(star_container[count].getAttribute("data-rate")),
      last_star_rate = star_container[count].getAttribute("data-rate") % 1,
      remaining_star = 5 - star_rate_count - (last_star_rate != 0 ? 1 : 0);
    for (let i = 0; i < star_rate_count; i++) {
      star_container[count].insertAdjacentHTML("beforeend",
        `
        <svg viewBox="0 0 535.5 535.5" width="15px" height="15px">
          <g fill="gold">
            <polygon points="535.5,210.375 344.25,210.375 267.75,19.125 191.25,210.375 0,210.375 172.125,325.125 95.625,516.375 
                267.75,401.625 439.875,516.375 363.375,325.125 	" />
          </g>
        </svg>
      `
      )
    }

    if (last_star_rate != 0) {
      star_container[count].insertAdjacentHTML("beforeend",
        `
        <svg viewBox="0 0 535.5 535.5" width="15px" height="15px">
          <linearGradient id="gradient">
            <stop offset="${last_star_rate*100}%" stop-color="gold"></stop>
            <stop offset="${last_star_rate*100}%" stop-color="black"></stop>
          </linearGradient>
          <g fill="url(#gradient)" stroke-width="2">
            <polygon points="535.5,210.375 344.25,210.375 267.75,19.125 191.25,210.375 0,210.375 172.125,325.125 95.625,516.375 
              267.75,401.625 439.875,516.375 363.375,325.125 	" />
          </g>
        </svg>
      `
      )
    }

    for (let i = 0; i < remaining_star; i++) {
      star_container[count].insertAdjacentHTML("beforeend",
        `
        <svg viewBox="0 0 535.5 535.5" width="15px" height="15px">
          <g fill="black">
            <polygon points="535.5,210.375 344.25,210.375 267.75,19.125 191.25,210.375 0,210.375 172.125,325.125 95.625,516.375 
                267.75,401.625 439.875,516.375 363.375,325.125 	" />
          </g>
        </svg>
      `
      )
    }
  }
}
export default rate;