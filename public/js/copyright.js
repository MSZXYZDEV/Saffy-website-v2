function copyright() {
    const date = new Date();
    const year = date.getFullYear();
    document.getElementById('copyright').innerHTML = `Copyright &copy; ${year} by Saffy.pl`;
}