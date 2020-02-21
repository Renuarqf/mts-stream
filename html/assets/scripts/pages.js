// links pages
$('body').append(
	'<div style="position: fixed; z-index: 1005; bottom: 0; right: 0; background: #fff; border: solid 1px #828286; width: 200px;"> \
		<a href="javascript:void(0);" style="float: right;background:#ccc; color:#000; padding: 10px 10px; text-decoration: none; font-size: 14px" onclick="$(this).parent().hide()">Close X</a> \
	<style> \
		#pages { padding: 10px 20px 0 10px; font-size: 14px; } \
		#pages a { text-decoration: none; color:#000; } \
		#pages li { margin: 10px 0; } \
	</style> \
	<ol id="pages"> \
		<li><a href="index.html">Home</a></li> \
		<li><a href="channel-main.html">Channel Main</a></li> \
		<li><a href="channel-loading.html">Channel Loading</a></li> \
		<li><a href="profile-rank.html">Profile Rank</a></li> \
		<li><a href="profile-self.html">Profile Self</a></li> \
		<li><a href="profile-settings.html">Profile Settings</a></li> \
		<li><a href="profile-settings-edit.html">Profile Settings Edit</a></li> \
		<li><a href="faq.html">FAQ</a></li> \
		<li><a href="search-result.html">Search Result</a></li> \
		<li><a href="widgets.html">Widgets</a></li> \
		<li><a href="404.html">404</a></li> \
		<li><a href="server-500.html">Server - 500</a></li> \
		<li><a href="server-works.html">Server - Works</a></li> \
		<li><a href="server-error.html">Server - Error</a></li> \
		<li><a href="league.html">League</a></li> \
		<li><a href="rules.html">Rules</a></li> \
		<li><a href="games.html">Games</a></li> \
		<li><a href="ui-kit.html">UI-Kit</a></li> \
	</ol> \
</div>');
