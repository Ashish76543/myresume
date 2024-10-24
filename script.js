const resumeData = {
    education: [
        "Carmel School (CBSE): 2010-2013",
        "Marion Villa Convent School (ICSE): 2013-2020",
        "Alphonsa Higher Secondary School: 2020-2022",
        "Madras Institute of Technology: 2023-2027"
    ],
    skills: [
        "Problem-Solving", "Mediation", "Adaptability", "Innovation", "Teamwork", "Coordination", "Prioritization"
    ],
    technicalSkills: [
        "C, C++, Python, Java",
        "Microsoft Excel, Word, Canva",
        "Android App Development using Android Studio",
        "Basic SQL"
    ],
    projects: [
        "Participated in Hackerrank competitions",
        "Solved problems on Leetcode and Hackerrank",
        "Developed a Quiz App using Android Studio",
        "Developed a music player program in C++"
    ]
};

function sendMessage() {
    const userMessage = document.getElementById('userInput').value;
    const messageDiv = document.createElement('div');
    messageDiv.textContent = `You: ${userMessage}`;
    document.getElementById('messages').appendChild(messageDiv);
    
    // Chatbot response logic
    let botResponse = "Sorry, I don't understand that.";
    
    if (userMessage.toLowerCase().includes("education")) {
        botResponse = `Education: ${resumeData.education.join(", ")}`;
    } else if (userMessage.toLowerCase().includes("skills")) {
        botResponse = `Skills: ${resumeData.skills.join(", ")}`;
    } else if (userMessage.toLowerCase().includes("technical")) {
        botResponse = `Technical Skills: ${resumeData.technicalSkills.join(", ")}`;
    } else if (userMessage.toLowerCase().includes("projects")) {
        botResponse = `Projects: ${resumeData.projects.join(", ")}`;
    }
    
    const botMessageDiv = document.createElement('div');
    botMessageDiv.textContent = `Bot: ${botResponse}`;
    botMessageDiv.style.color = "blue";
    document.getElementById('messages').appendChild(botMessageDiv);
    
    document.getElementById('userInput').value = ""; // Clear the input
}
