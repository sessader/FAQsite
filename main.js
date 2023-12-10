function showHome() {
    // Highlight the Home link
    highlightLink('homeLink');

    // Ensuring header button is correct
    updateHeader('HOME', 'See More', 'https://tinyurl.com/summaryWriteUp');

    // Restore the original content
    document.getElementById('mainContent').innerHTML = originalContent;

    // Hide all content sections
    hideAllContent();

    // Show the Home content
    document.getElementById('homeContent').style.display = 'block';
}

function showDepartment() {
    highlightLink('departmentLink');
    updateHeader('CONTACT INFORMATION', 'Learn More', 'https://directory.rpi.edu/departments/2609');
    hideAllContent();
    document.getElementById('departmentContent').style.display = 'block';
    var mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
    <div class="w3-row-padding w3-padding-64 w3-container">

    <div class="w3-content">
  
      <div class="w3-twothird">
  
        <h1>Information Technology and Web Sciences</h1>
        <h5 class="w3-padding-32">ITWS</h5>
        <p class="w3-text-grey">You can join the ITWS Discord <a href="https://discord.gg/HRYuxjAtft" target="_blank">here</a> to get connected with a member of the community.<br>
        You can also submit a request <a href="https://science.rpi.edu/itws/contact" target="_blank">here</a> to get connected with an advisor.
        </p>
  
      </div>
      <div class="w3-third w3-center">
  
        <i class="fa fa-code w3-padding-64 w3-text-red" style="font-size: 200px"></i>
  
      </div>
  
    </div>
  
  </div>
  
  
  
  <!-- Second Grid -->
  
  <div class="w3-row-padding w3-light-grey w3-padding-64 w3-container">
  
    <div class="w3-content">
  
      <div class="w3-third w3-center">
  
        <i class="fa fa-laptop w3-padding-64 w3-text-red w3-margin-right" style="font-size: 200px"></i>
  
      </div>
      <div class="w3-twothird">
  
        <h1>Computer Science</h1>
        <h5 class="w3-padding-32">CS</h5>
        <p class="w3-text-grey">
    You can submit a request <a href="https://science.rpi.edu/computer-science/contact" target="_blank">here</a>.<br>
    Or you can join the unoffical CS Discord <a href="https://discord.gg/GpysPtBPpw" target="_blank">here</a>.<br>
    You can also join the School of Science Advising Hub Discord <a href="http://discord.gg/ZhHSkve" target="_blank">here</a> to get connected with an advising member.
</p>
  
      </div>
  
    </div>
  
  </div>

  <div class="w3-row-padding w3-padding-64 w3-container">

    <div class="w3-content">
  
      <div class="w3-twothird">

        <h1>Mathematical Sciences</h1>
        <p class="w3-text-grey">You can submit a request <a href="https://science.rpi.edu/mathematical-sciences/contact" target="_blank">here</a>.<br>
        Or you can join the unofficial Mathematics Discord <a href="https://discord.gg/vhp7hGSmnt" target="_blank">here</a>.
        </p>
  
      </div>
      <div class="w3-third w3-center">
  
        <i class="fa fa-calculator w3-padding-64 w3-text-red" style="font-size: 200px"></i>
  
      </div>
  
    </div>
  
  </div>

<div class="w3-row-padding w3-light-grey w3-padding-64 w3-container">
  
    <div class="w3-content">
  
      <div class="w3-third w3-center">
  
        <i class="fa fa-plane w3-padding-64 w3-text-red w3-margin-right" style="font-size: 200px"></i>
  
      </div>
      <div class="w3-twothird">

        <h1>Mechanical, Aerospace & Nuclear Engineering</h1>
        <h5 class="w3-padding-32">MANE</h5>
        <p class="w3-text-grey"> You can join the offical MANE Discord <a href="https://discord.gg/89JuZ45" target="_blank">here</a> to be connected with a member of the community.<br>
        You can also email them at mane@rpi.edu!
        </p>
      </div>
  
    </div>
  
  </div>

  <div class="w3-container w3-black w3-center w3-opacity w3-padding-64">
  
      <h1 class="w3-margin w3-xlarge">More to come!</h1>
  
  </div>

</div>
`;
}

function showFAQ() {
    highlightLink('faqLink');
    updateHeader('FAQs', 'Request Information', 'https://forms.gle/r8BT4JHZ2J3XhYQv6');
    hideAllContent();
    document.getElementById('faqContent').style.display = 'block';
    var mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
    <div class="w3-row-padding w3-padding-64 w3-container">

    <div class="w3-content">
  
      <div class="w3-twothird">
  
        <h1>What does the academic calendar look like?</h1>
        <h5 class="w3-padding-32">Incoming and Current Students, Alumni, Faculty, Parents</h5>
        <p class="w3-text-grey">You can find the current academic schedule <a href="https://info.rpi.edu/registrar/academic-calendar" target="_blank">here</a>.<br>
        <br>
        You can also see the current dining schedule <a href="https://rpi.sodexomyway.com/dining-near-me/hours" target="_blank">here</a>.<br>
        <br>
        You may also refer to upcoming events <a href="https://info.rpi.edu/student-life/upcoming-events" target="_blank">here</a>.
        </p>
  
      </div>
      <div class="w3-third w3-center">
  
        <i class="fa fa-calendar w3-padding-64 w3-text-red" style="font-size: 200px"></i>
  
      </div>
  
    </div>
  
  </div>
  
  
  
  <!-- Second Grid -->
  
  <div class="w3-row-padding w3-light-grey w3-padding-64 w3-container">
  
    <div class="w3-content">
  
      <div class="w3-third w3-center">
  
        <i class="fa fa-globe w3-padding-64 w3-text-red w3-margin-right" style="font-size: 200px"></i>
  
      </div>
      <div class="w3-twothird">
  
        <h1>How can I get to this building on campus?</h1>
        <h5 class="w3-padding-32">Incoming and Current Students, Alumni, Faculty, Parents</h5>
        <p class="w3-text-grey">
    You can refer to <a href="http://www.vision.cs.rpi.edu/contact/RPI_Campus_Map.pdf" target="_blank">this</a> PDF copy of a campus map that will allow you to match the building to the name and map out any routes you need to take.<br>
    <br>
    Or you can use the interactive map <a href="https://info.rpi.edu/map" target="_blank">here</a>. As a word of warning, it does rely on Google Maps so not all buildings will be properly shown and it may not reflect a proper route.
    </p>
  
      </div>
  
    </div>
  
  </div>

  <div class="w3-row-padding w3-padding-64 w3-container">

    <div class="w3-content">
  
      <div class="w3-twothird">

        <h1>What food options are there on and off campus?</h1>
        <h5 class="w3-padding-32">Incoming and Current Students, Alumni, Faculty, Parents</h5>
        <p class="w3-text-grey">There are a couple of on-campus options you can view <a href="https://rpi.sodexomyway.com/dining-near-me/resaurants-and-cafes" target="_blank">here</a>, but please note that without Flex Dollars you will pay for any added tax as well.<br>
        <br>
        Alternatively, there is a variety of places you can visit near campus (mainly in downtown Troy). You can take a look at some RPI favorites <a href="https://www.reddit.com/r/RPI/comments/d6k50v/best_off_campus_restaurants/" target="_blank">here</a> and some hidden gems <a href="https://www.reddit.com/r/Troy/comments/yg3pgf/underrated_restaurants/" target="_blank">here</a>.
        </p>
  
      </div>
      <div class="w3-third w3-center">
  
        <i class="fa fa-coffee w3-padding-64 w3-text-red" style="font-size: 200px"></i>
  
      </div>
  
    </div>
  
  </div>

  <div class="w3-container w3-black w3-center w3-opacity w3-padding-64">
  
      <h1 class="w3-margin w3-xlarge">More details and questions to come soon!</h1>
  
  </div>

</div>
`;
}

function showSuggestions() {
    highlightLink('suggestionLink');
    updateHeader('SUGGESTIONS', 'Submit Here', 'https://forms.gle/cqvB8hTaqPs9Danm7');
    hideAllContent();
    document.getElementById('suggestionContent').style.display = 'block';
    var mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <div class="w3-container w3-center">
            <h2>In-site suggestion box coming soon. Stay tuned!</h2>
        </div>
    `;
}

function showFuture() {
    highlightLink('futureLink');
    updateHeader('FUTURE UPDATES', 'Learn More', 'https://tinyurl.com/FAQfutureUpdate');
    hideAllContent();
    document.getElementById('futureContent').style.display = 'block';
    var mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <div class="w3-container w3-center">
            <h2>In-site update tracker coming soon. Stay tuned!</h2>
        </div>
    `;
}

function hideAllContent() {
    document.getElementById('homeContent').style.display = 'none';
    document.getElementById('departmentContent').style.display = 'none';
    document.getElementById('faqContent').style.display = 'none';
    document.getElementById('suggestionContent').style.display = 'none';
    document.getElementById('futureContent').style.display = 'none';
}

function updateHeader(title, buttonText, buttonLink) {
    document.getElementById('headerTitle').textContent = title;
    var changeButton = document.getElementById('headerButton');
    changeButton.textContent = buttonText;
    if (buttonLink) {
        changeButton.href = buttonLink;
        changeButton.target = '_blank'; // Open in a new tab
    } else {
        changeButton.removeAttribute('href');
        changeButton.removeAttribute('target');
    }
}

function highlightLink(linkId) {
    // Reset all links to default color
    var links = document.getElementsByClassName('w3-bar-item');
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove('w3-white');
        links[i].classList.add('w3-hover-white');
    }

    // Highlight the active link
    document.getElementById(linkId).classList.add('w3-white');
    document.getElementById(linkId).classList.remove('w3-hover-white');
}
