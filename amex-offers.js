(async function () {
    // Find all the "Add to Card" buttons on the page
    var offerButtons = Array.from(document.getElementsByClassName("offer-cta")).filter(btn => btn.title == "Add to Card");
    var index;
    for (index = 0; index < offerButtons.length; ++index) {
        console.log("Clicking Offer Button");
        offerButtons[index].click();
        // 2 seconds rate-limiting
        await new Promise(r => setTimeout(r, 2000));
    }
})();
