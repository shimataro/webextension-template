browser.tabs.onActivated.addListener((activeInfo) =>
{
	browser.pageAction.show(activeInfo.tabId);
});
browser.pageAction.onClicked.addListener((/* tab */) =>
{
	countClicked()
		.catch((err) =>
		{
			return notify("error", err.message);
		});
});

let count = 0;

/**
 * クリック回数を計測
 */
async function countClicked(): Promise<void>
{
	count++;
	await notify("clicked_page_action", `${count}`);
}

/**
 * 通知メッセージを表示
 * @param messageId メッセージID
 * @param substitutions 置換部分
 * @returns 通知ID
 */
function notify(messageId: string, ...substitutions: string[]): Promise<string>
{
	const options: browser.notifications.CreateNotificationOptions = {
		type: "basic",
		iconUrl: "./icons/icon.svg",
		title: browser.i18n.getMessage("manifest_name"),
		message: browser.i18n.getMessage(messageId, substitutions),
	};
	return browser.notifications.create(options);
}
