const chapters = Array.from(document.querySelectorAll('li.wp-manga-chapter')).map(chapterEl => {
    const link = chapterEl.querySelector('a').href;
    const chapterText = chapterEl.querySelector('a').textContent.trim();
    
    // Date parsing with UTC conversion
    const rawDate = chapterEl.querySelector('span.chapter-release-date i').textContent.trim();
    const dateParts = rawDate.split(/[\s,]+/).filter(p => p);
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                       'July', 'August', 'September', 'October', 'November', 'December'];
    
    const monthIndex = monthNames.indexOf(dateParts[0]);
    const day = parseInt(dateParts[1], 10);
    const year = parseInt(dateParts[2], 10);
    
    // Create UTC timestamp (in seconds)
    const utcTimestamp = Math.floor(Date.UTC(year, monthIndex, day) / 1000);

    return {
        chapter: chapterText,
        link: link,
        releaseDate: utcTimestamp
    };
});

console.log(chapters);
