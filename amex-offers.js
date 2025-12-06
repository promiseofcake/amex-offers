(async function () {
    // Find all the new "Add to List Card" buttons
    var offerButtons = Array.from(
        document.querySelectorAll('button[data-testid="merchantOfferListAddButton"]')
    ).filter(btn => btn.title.toLowerCase() === "add to list card");

    for (let i = 0; i < offerButtons.length; i++) {
        console.log("Clicking Offer Button", i + 1, "of", offerButtons.length);
        offerButtons[i].click();

        // 2-second rate limit
        await new Promise(r => setTimeout(r, 2000));
    }
})();
