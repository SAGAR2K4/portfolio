let tablinks = document.getElementsByClassName("tab-links");
        let tabcontents = document.getElementsByClassName("tab-contents");

        function openTab(tabname) {
            for(link of tablinks) {
                link.classList.remove("active-link");
            }
            for(content of tabcontents) {
                content.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }