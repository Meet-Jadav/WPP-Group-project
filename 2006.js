const jan26 = document.getElementById('jan26');

jan26.addEventListener('click', () => {
    // Check if it's already expanded, if yes, do nothing
    if (jan26.classList.contains('expanded')) {
        return;
    }

    // Add the expanded class
    jan26.classList.add('expanded');

    // Change content
    jan26.innerHTML = `
        <h3>26 January</h3>
        <ul>
            <li>King Abdullah bin Abdulaziz al-Saud, the King of Saudi Arabia was the chief guest for the Republic Day Parade.</li>
            <li>Hamas won the 2006 Palestinian legislative election, securing 76 seats in the 132-member legislature.</li>
            <li>Ellen Johnson Sirleaf was sworn in as Liberia's new president, becoming Africa's first female elected head of state.</li>
            <li>NASA's Stardust mission successfully ended, the first to return dust from a comet.</li>
            <li>NASA launched the first interplanetary space probe to Pluto, the New Horizons.</li>
        </ul>
        <button id="closeBtn">Close</button>
    `;

    // Add event listener to close button
    document.getElementById('closeBtn').addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent parent div click event
        jan26.classList.remove('expanded'); // Remove expanded class
        jan26.innerHTML = "<h3>26 January</h3><p>Republic Day Parade – Guest: King Abdullah of Saudi Arabia (first Saudi king to visit in 50 years).</p>";
    });
});
//
const march3 = document.getElementById('march3');

march3.addEventListener('click', () => {
    // Check if it's already expanded, if yes, do nothing
    if (march3.classList.contains('expanded')) {
        return;
    }

    // Add the expanded class
    march3.classList.add('expanded');

    // Change content
    march3.innerHTML = `
        <h3>3 March</h3>
        <ul>
            <li>A series of bomb blasts occurred in Varanasi, Uttar Pradesh, targeting the Sankat Mochan Hanuman Temple and Varanasi Cantonment Railway Station.</li>
            <li>U.S. President George W. Bush Visited India </li>
            <li>The first Test match between India and England started in Nagpur.</li>
        </ul>
        <button id="closeBtn">Close</button>
    `;

    // Add event listener to close button
    document.getElementById('closeBtn').addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent parent div click event
        march3.classList.remove('expanded'); // Remove expanded class
        march3.innerHTML = "<h3>3 March</h3><p>President George W. Bush visits India, signs nuclear cooperation deal (123 Agreement groundwork).</p>";
    });
});
//
const may = document.getElementById('may');

may.addEventListener('click', () => {
    // Check if it's already expanded, if yes, do nothing
    if (may.classList.contains('expanded')) {
        return;
    }

    // Add the expanded class
    may.classList.add('expanded');

    // Change content
    may.innerHTML = `
        <h3>May</h3>
        <ul>
            <li>State Assembly Elections were held in five states:Tamil Nadu,West Bengal,Kerala,Assam and Pondicherry</li>
            <li>A Naval helicopter crashed into the Arabian Sea off the coast of Mumbai.</li>
            <li>The Indian government proposed a 27% reservation for OBCs in higher education institutions (IIMs, IITs, medical colleges).

</li>
            <li>Terrorists attacked a passenger bus in Doda, Jammu and Kashmir, killing at least 13 civilians.</li>
        </ul>
        <button id="closeBtn">Close</button>
    `;

    // Add event listener to close button
    document.getElementById('closeBtn').addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent parent div click event
        may.classList.remove('expanded'); // Remove expanded class
        may.innerHTML = `<h3>May</h3>
            <p>Massive student protests against OBC reservation quotas in central institutions (Mandal II protests).</p>`;
    });
});
//
const july11 = document.getElementById('july11');

july11.addEventListener('click', () => {
    // Check if it's already expanded, if yes, do nothing
    if (july11.classList.contains('expanded')) {
        return;
    }

    // Add the expanded class
    july11.classList.add('expanded');

    // Change content
    july11.innerHTML = `
        <h3>11 July</h3>
        <ul>
            <li>Various awareness campaigns were conducted by the government and NGOs across different states on World Population day</li>
            <li>Following the Mumbai Train Bombings, security agencies across Delhi, Bangalore, Chennai, and Kolkata were put on high alert.</li>
            <li>Heavy Rainfall and Floods in Maharashtra and Gujarat</li>
            <li>After the Mumbai train bombings, the Bombay Stock Exchange (BSE) Sensex initially dropped due to panic selling.</li>
        </ul>
        <button id="closeBtn">Close</button>
    `;

    // Add event listener to close button
    document.getElementById('closeBtn').addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent parent div click event
        july11.classList.remove('expanded'); // Remove expanded class
        july11.innerHTML = `<h3>11 July</h3>
            <p>Mumbai Train Blasts – 7 coordinated bombings on suburban trains, over 200 killed, 700+ injured.</p>
        `;
    });
});
//
const oct10 = document.getElementById('oct10');

oct10.addEventListener('click', () => {
    // Check if it's already expanded, if yes, do nothing
    if (oct10.classList.contains('expanded')) {
        return;
    }

    // Add the expanded class
    oct10.classList.add('expanded');

    // Change content
    oct10.innerHTML = `
        <h3>10 October</h3>
        <ul>
            <li>The Indian military successfully test-fired the Agni-II missile from the Wheeler Island (now Dr. Abdul Kalam Island) off the coast of Odisha.</li>
            <li>The Supreme Court of India heard key arguments in a case regarding the 27% reservation for Other Backward Classes (OBCs) in higher education.</li>
            <li>Hospitals, NGOs, and government agencies organized events to promote mental health awareness.</li>
            <li>It was confirmed on October 10, 2006, that Shah Rukh Khan would replace Amitabh Bachchan as the new host of Kaun Banega Crorepati (KBC) Season 3.</li>
        </ul>
        <button id="closeBtn">Close</button>
    `;

    // Add event listener to close button
    document.getElementById('closeBtn').addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent parent div click event
        oct10.classList.remove('expanded'); // Remove expanded class
        oct10.innerHTML = `<h3>10 October</h3>
            <p>Dr. A.P.J. Abdul Kalam’s Vision 2020 speech gains attention; focus on youth and tech.</p>` ;
    });
});
//
const dec31 = document.getElementById('dec31');

dec31.addEventListener('click', () => {
    // Check if it's already expanded, if yes, do nothing
    if (dec31.classList.contains('expanded')) {
        return;
    }

    // Add the expanded class
    dec31.classList.add('expanded');

    // Change content
    dec31.innerHTML = `
        <h3>11 July</h3>
        <ul>
            <li>Saddam Hussein, the former President of Iraq, was executed on December 30, 2006 (early morning of December 31 in India).</li>
            <li>Major cities like Mumbai, Delhi, Bangalore, and Kolkata had tight security due to the threat of terrorist attacks.</li>
            <li>2006 saw huge foreign investments, IT and real estate booms, and India emerging as a global economic power.</li>
            <li>The Delhi Metro Rail Corporation (DMRC) announced a major expansion plan to connect more areas in Phase II, including Gurgaon and Noida.</li>
        </ul>
        <button id="closeBtn">Close</button>
    `;

    // Add event listener to close button
    document.getElementById('closeBtn').addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent parent div click event
        dec31.classList.remove('expanded'); // Remove expanded class
        dec31.innerHTML = `<h3>31 December</h3>
            <p>Saddam Hussein’s execution causes protests in parts of India (symbolic protests in Kashmir, Hyderabad).
            </p>`;
    });
});
//
