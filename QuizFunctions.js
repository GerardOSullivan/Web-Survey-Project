"use script";

let totalScore=0;
let answers = [];
let answersTicked=0;
let localStorageArray = [];
let timeOut;
const allTDTags = document.getElementsByTagName('td');

function startSurvey()
{
    document.getElementById('homepage-header').style.display="none";
    document.getElementById('survey-header').style.display="block";
    document.getElementById('section1').style.display="block";
}

function changeTableTagColourToBlack()
{
    for (let i=0; i < allTDTags.length; i++) {

        allTDTags[i].style.color = 'black';
    }
}

function clearAnswers()
{
    for (let i=0; i < answers.length; i++) {

        answers[i]=null;
    }
}

function recordAnswers(question, answer) {
    answers[question - 1] = answer;
}

function displaySectionResult(currentSection,sectionScore)
{
    //This function displays the results summary for each section
    let resultText =document.createElement("h2");
    let node;

    if(currentSection===1)
    {
        if(sectionScore>=4 && sectionScore<=9)
        {
            node = document.createTextNode("The face to face training session will be a great opportunity for you to get guidance on progressing the universability of your organisation");
        }

        if(sectionScore>=10 && sectionScore<=15)
        {
            node = document.createTextNode("With a little more thought you will see more opportunities for increasing the universability of your services");
        }

        if(sectionScore>=16 && sectionScore<=20)
        {
            node = document.createTextNode("Well done you are clearly being proactive in considering making your services more universal");
        }
    }

    if(currentSection===2)
    {
        if(sectionScore>=5 && sectionScore<=11)
        {
            node = document.createTextNode("The face to face training session will be a great opportunity for you to gain some perspective of the benefits of universability to your organisation and its members");
        }

        if(sectionScore>=12 && sectionScore<=19)
        {
            node = document.createTextNode("You have some sense of the benefits of a universal organisation.");
        }

        if(sectionScore>=20 && sectionScore<=25)
        {
            node = document.createTextNode("You have a very high level of appreciation of the mutual benefits for all stakeholders in an inclusive organisation");
        }
    }

    if(currentSection===3)
    {
        if(sectionScore>=2 && sectionScore<=5)
        {
            node = document.createTextNode("The face to face session has great scope to convince you of the feasibility of promoting inclusion - just keep your mind open to the possibility");
        }

        if(sectionScore>=6 && sectionScore<=10)
        {
            node = document.createTextNode("You can see an inclusive future for your organisation and its members, the challenge is now to ensure that your decisions and resource allocations make this happen");
        }
    }

    if(currentSection===4)
    {
        if(sectionScore===0 || sectionScore===10)
        {
            node = document.createTextNode("The face to face training session will only be of value to progressing your universability if you are willing to challenge your belief system about access to fitness services being a fundamental");
        }

        if(sectionScore===20)
        {
            node = document.createTextNode("While there is some openness to equity in your organisation the commitment is not yet wholly embraced by all. Belief systems within the organisation may be confused and possibly conflicting. It would be desirable to promote dialogue amongst your stakeholders around the topic of inclusion");
        }

        if(sectionScore===30 || sectionScore===40)
        {
            node = document.createTextNode("Your organisation’s value system is an inclusive one. Your challenge will be to safeguard this and promote this philosophy within the wider fitness sector");
        }
    }

    if(currentSection===5)
    {
        if(sectionScore===0)
        {
            node = document.createTextNode("Universability is not something with which you have yet engaged, so the face to face training session will be an opportunity for significant learning in this respect");
        }

        if(sectionScore===10)
        {
            node = document.createTextNode("Your policies are confused and possibly conflicting. Some guidance will be needed to bring greater coherency to your efforts to date");
        }

        if(sectionScore===20 || sectionScore===30)
        {
            node = document.createTextNode("Your journey of making organisational policies inclusive has started well and this may be the catalyst for enhanced universability – if you are open to progressive change");
        }

        if(sectionScore===40 || sectionScore===50)
        {
            node = document.createTextNode("Your intentions are very sound in respect of inclusion and you have the potential to be a high achiever in this respect");
        }
    }

    if(currentSection===6)
    {
        if(sectionScore===0)
        {
            node = document.createTextNode("You have great scope for learning during the face to face training session, once you have an open mind to the possibilities that an inclusive approach can offer");
        }

        if(sectionScore===10 || sectionScore===20)
        {
            node = document.createTextNode("You have made a positive start upon which your organisation can build sound relationships with people with disabilities. Unit three will offer you more ideas in respect of forging alliances with people with disabilities");
        }

        if(sectionScore>=30 && sectionScore<=50)
        {
            node = document.createTextNode("You are already a potential resource for people with disabilities in your community, as your networks are an essential element in the UFIT approach");
        }
    }

    if(currentSection===7)
    {
        if(sectionScore===0)
        {
            node = document.createTextNode("Your organisation has yet to learn the power of dialogue as a means of providing desirable fitness services to all members of the community");
        }

        if(sectionScore===10 || sectionScore===20)
        {
            node = document.createTextNode("As a listening organisation you have important information that can guide your journey towards universability. Your challenge is to interpret what is being said and to translate it into inclusive actions");
        }
    }

    if(currentSection===8)
    {
        if(sectionScore===0)
        {
            node = document.createTextNode("You have great scope for learning during the face to face training session, once you have an open mind to the possibilities that an inclusive approach can offer");
        }

        if(sectionScore===10 || sectionScore===20)
        {
            node = document.createTextNode("You have made a positive start – you can use the questions here to reflect on how you can make more progress in this respect");
        }

        if(sectionScore>=30 || sectionScore<=50)
        {
            node = document.createTextNode("You have the potential to be a role model of provision in the fitness sector. Programming is the basic unit of service delivery – where this is inclusive, your relevance to the wider community is enhanced");
        }
    }

    if(currentSection===9)
    {
        if(sectionScore===0)
        {
            node = document.createTextNode("Universability is not something with which you have engaged so the face to face training session will be an opportunity for significant learning in this respect");
        }

        if(sectionScore===10)
        {
            node = document.createTextNode("Depending on the strength of influence of those with some perspective on inclusion, you may have scope to drive improvements from within. Consider the scope for repositioning those with training and knowledge in the area of inclusion to optimise their influence");
        }

        if(sectionScore===20 || sectionScore===30)
        {
            node = document.createTextNode("There is some scope within your organisation to promote universability principles and broaden your organisation’s relevance in the wider community ");
        }

        if(sectionScore>=40 || sectionScore<=60)
        {
            node = document.createTextNode("You have invested in your organisation’s most important asset. Your potential to offer inclusive services is vast. The challenge is to make sure that you optimally deploy this wisdom to make all aspects of your service provision truly inclusive");
        }
    }

    if(currentSection===10)
    {
        if(sectionScore===0)
        {
            node = document.createTextNode("The face to face training session will provide you with wonderful ideas for making small (and inexpensive) changes to enhance the universability of the facility.");
        }

        if(sectionScore===10)
        {
            node = document.createTextNode("While you have made a start in the direction of universability there is considerable scope for improvements. ");
        }

        if(sectionScore===20 || sectionScore===30)
        {
            node = document.createTextNode("While some aspects of your facility are accessible there is scope for enhancement. The face to face training session will offer you some suggestions for improvement here.");
        }

        if(sectionScore===40 || sectionScore===50)
        {
            node = document.createTextNode("The facility is largely accessible and hence there is significant scope for promoting universability. ");
        }
    }

    if(currentSection===11)
    {
        if(sectionScore===0)
        {
            node = document.createTextNode("The face to face training session will offer you many ideas for inclusivizing your promotion materials");
        }

        if(sectionScore===10)
        {
            node = document.createTextNode("Your organisation has some appreciation of the need for have diversity to be represented in your promotional materials. With a little more thoughtfulness your promotional campaigns will speak louder to a wider audience");
        }

        if(sectionScore===20)
        {
            node = document.createTextNode("You clearly understand the power of imagery and language and your materials may be potential templates for others in the promotion of fitness services");
        }
    }

    //append on which ever text and add it to that section. This saved me of having empty h2 tags and using innerHTML to assign values.
    resultText.appendChild(node);
    let element= document.getElementById("section"+currentSection);
    element.appendChild(resultText);
}

function scoreSection(currentSection) {
    let sectionScore=0;

    //change length of answer array depending on the amount of questions asked
    //some sections had an equal amount of questions
    if(currentSection===1)
    {
        answers.length=4;
    }

    if(currentSection===2 || currentSection===5 ||currentSection===6)
    {
        answers.length=5;
    }

    if(currentSection===3 || currentSection===7 || currentSection===11)
    {
        answers.length=2;
    }

    //question 4 8 and 10 require more validation to determine the length depending on how many check boxes are ticked
    if(currentSection===4 || currentSection===8 || currentSection===10)
    {
        if(answers[0]==null)
        {
            window.alert("Please select either yes or no");
            document.getElementById("sec"+currentSection+"Question1").style.color = "#ff0002";
            return;
        }
        else if(currentSection===8 && answers[1]==null)
        {
            window.alert("Please select either yes or no");
            document.getElementById("sec8Question3").style.color = "#ff0002";
            return;
        }
        else
        {
            //check if the section contained checkboxes
            checkIfTicked("Section"+currentSection);

            //change the length of the array depending on how many questions there was excluding checkboxes
            if(currentSection===4 || currentSection===10)
            {
                checkBoxesTickedArrayLength(1);
            }
            if(currentSection===8)
            {
                checkBoxesTickedArrayLength(2);
            }

        }
    }

    if(currentSection===9)
    {
        answers.length=6;
    }

    //check for any questions that are not answered
    for(let i=0;i < answers.length;i++)
    {
        if(answers[i]==null)
        {
            //I had to validate Section 5 question 3 part a and b separately(because they contained letters)
            // and had to include question 4 (as question 3 part b is counted as a question)
            if(currentSection===5 && i>=2)
            {
                if (i === 2) {
                    window.alert("Please enter a value for Question 3 part 'A'");
                    document.getElementById("sec5Question3a").style.color = "#ff0002";
                    return;
                } else if (i === 3) {
                    window.alert("Please enter a value for Question 3 part 'B'");
                    document.getElementById("sec5Question3b").style.color = "#ff0002";
                    return;
                } else if (i === 4) {
                    i--;
                    // This makes i=3 and when leaving the if statement i+1 will give 4
                    //otherwise the alert will say question 5 was not answered
                }
            }

            //I again validated Section 9 separately as it contained letters in the questions
            if(currentSection===9)
            {
                if (i === 0) {
                    window.alert("Please enter a value for Question 1 part 'A'");
                    document.getElementById("sec9Question1a").style.color = "#ff0002";
                    return;
                } else if (i === 1) {
                    window.alert("Please enter a value for Question 1 part 'B'");
                    document.getElementById("sec9Question1b").style.color = "#ff0002";
                    return;
                }
                else if (i === 2) {
                    window.alert("Please enter a value for Question 1 part 'C'");
                    document.getElementById("sec9Question1c").style.color = "#ff0002";
                    return;
                }
                else if (i === 3) {
                    window.alert("Please enter a value for Question 1 part 'D'");
                    document.getElementById("sec9Question1d").style.color = "#ff0002";
                    return;
                }else if (i === 4) {
                    i=1;
                }else if (i === 5) {
                    i=2;
                }

            }
                window.alert("Please enter a value for Question " + (i+1));
                document.getElementById("sec"+currentSection+"Question" + (i+1)).style.color="#ff0002";
                return;
        }
    }

    //turn all questions colour back to black
    changeTableTagColourToBlack();

    //total answers
    for(let i=0;i < answers.length;i++)
    {
        totalScore+=answers[i];
        sectionScore+=answers[i];
    }

    //I learned of the local storage near the end of my project.
    //Im just using it now as a demo that I know how to use it.
    localStorageArray.push(sectionScore);
    localStorage.setItem('SectionScores', JSON.stringify(localStorageArray));

    //hide the button
    document.getElementById("section"+currentSection+"Button").style.display="none";

    //show the section results
    displaySectionResult(currentSection,sectionScore);

    //stop people clicking on current section(I dont even need this because it wont affect values it just looks cleaner that you cant change answers)
    document.getElementById("section"+currentSection).style.pointerEvents="none";

    //show next section
    document.getElementById("section"+(currentSection+1)).style.display="block";

    //clear answers array
    clearAnswers();

    //reset ticked Boxes(if any)
    answersTicked=0;
}

function checkIfTicked(name)
{
    const checkBoxes = document.querySelectorAll(`input[name="${name}"]:checked`);
    answersTicked+=checkBoxes.length;
}

function checkBoxesTickedArrayLength(lengthWithoutTickedBoxes)
{
    //change length depending on the amount of check boxes ticked
    answers.length=lengthWithoutTickedBoxes+answersTicked;
    for(let i=lengthWithoutTickedBoxes;i < answers.length;i++)
    {
        answers[i]=10;
    }
}

function startTimer() {

    let fiveMinutes = 300;
    let timer = fiveMinutes, minutes, seconds;

    //creating the timer element only when the timer is started. This avoids having an empty h2 tag
    let timerElement =document.createElement("h2");
    timerElement.setAttribute("id",`timer`);
    timerElement.setAttribute("class",`timer`);
    let element= document.getElementById("survey-form");
    element.appendChild(timerElement);

    timeOut = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        //ternary operator demo. if minutes is less than 10 then keep leading zero e.g "09" else display minutes e.g "15"
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        //demoing querySelector
        document.querySelector('#timer').textContent = minutes + ":" + seconds;

        //countdown :)
        timer--;

        if (timer < 0) {
            document.location='SessionTimeout.html';
        }
    }, 1000);
}

function processSurvey()
{
    //changing the document location to the top of the page and changing the elements makes it look like you loaded a new page
    document.getElementById('survey-header').style.display="none";
    document.getElementById('process-header').style.display="block";
    document.location="#top";

    //stop the timer and hide it
    clearInterval(timeOut);
    document.querySelector('#timer').setAttribute("class","hideSection");

    //display total using local storage(also displaying a for each loop)
    //This was really unnecessary as I had a total already for the sections but I am demonstrating that I know how to use local storage
    if(localStorage)
    {
        let localStorageTotal=0;
        for(let index in localStorageArray)
        {
            let storedItems = JSON.parse(localStorage.getItem("SectionScores"));
            localStorageTotal+=storedItems[index];
        }

        //show local storage in alert box
        alert("Your total score for the survey was " + localStorageTotal);

    }

    //hide all of the survey questions part of each section leaving only the heading and final comment
    for(let i=1;i<13;i++)
    {
        document.getElementById("surveyQuestions"+i).setAttribute("class","hideSection");
    }

    //add the final score in the last section
    let element= document.getElementById("section12");
    let finalScoreTitle =document.createElement("h2");
    let finalScore =document.createElement("h2");
    let node = document.createTextNode("Your final score is: " + totalScore);
    finalScoreTitle.appendChild(node);
    element.appendChild(finalScoreTitle);

    //change elements depending on total score
    if(totalScore>=340 && totalScore<=425)
    {
        node = document.createTextNode("Your organisation is evidently committed to inclusion.  Your perspective will be most valuable at the face to face training session as both an advocate and a guide for inclusive fitness service provision. You are highly relevant in your community and hence the organisation is sustainable and will remain so once your current commitment is supported and enhanced over time.");
    }else if (totalScore>=245 && totalScore<=339)
    {
        node = document.createTextNode("Your organisation is making genuine and meaningful efforts in the direction of universability.  However provision is probably patchy and inconsistent, which may cause some confusion among members and potential members. Promotion of inclusive opportunities as an organisational priority has the potential to broaden your relevance to an even greater number of community members. ");
    }else if(totalScore>=150 && totalScore<=244)
    {
        node = document.createTextNode("While some work is being done to enhance inclusive provision, there is scope for significant gains in this aspect. Building on what you are doing well and embracing new ideas will see your organisation make the transitions to inclusivity with some ease. The face to face training session will be a unique opportunity to learn from others in your sector.");
    }else
    {
        node = document.createTextNode("The face to face training session will be of immense value to your organisation. An exciting challenge awaits as you move towards universability. It will take some time but the secret is to keep doing what you are doing well and gradually add other initiatives to make your services more inclusive. The face to face training session will lead to significant learning for your organisation. ");
    }
    finalScore.appendChild(node);
    element.appendChild(finalScore);
}

//listbox i took this code from here https://www.youtube.com/watch?v=HMNXXCpGx7w&ab_channel=Decoder
let sector={
    public:['Education', 'Healthcare', 'Other'],
    private:['Hospitality', 'Financial services', 'other']
};

let firstMenu=document.getElementById('first_listbox');
let secondMenu=document.getElementById('second_listbox');

firstMenu.addEventListener('change',function ()
{
    let selectedValue= sector[this.value];

    //clear second menu
    while(secondMenu.options.length >0)
    {
        secondMenu.options.remove(0);
    }

    //add the selected values to the second menu
    Array.from(selectedValue).forEach(function(el) {
        let option = new Option(el, el);
        secondMenu.appendChild(option);

    });
});

function helpOn(currentSection){
    document.getElementById("secHelp"+currentSection).style.display="block";
}

function helpOff(currentSection){
    document.getElementById("secHelp"+currentSection).style.display="none";
}

