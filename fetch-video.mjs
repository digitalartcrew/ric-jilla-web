// node >= 18
const videoId = "x10heod";

async function main() {
  const res = await fetch(`https://api.dailymotion.com/video/${videoId}?fields=id,title,owner,created_time,duration,url`);
  if (!res.ok) {
    throw new Error(`HTTP ${res.status}`);
  }

  const data = await res.json();
  console.log(data);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
