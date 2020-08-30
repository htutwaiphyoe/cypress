window.onscroll = () =>
{
	const nav = document.querySelector('#heading');
	if(this.scrollY <= 520)
	{
		nav.className = '';
	}
	else
	{
		nav.className = 'scroll';
	}
}
