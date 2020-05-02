/**
 * タイトルを出力
 */
function logTitle(): void
{
	const domTitle = document.querySelector("title");
	if(domTitle === null)
	{
		return;
	}
	console.log(domTitle.innerText);
}

logTitle();
