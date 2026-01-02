"""Flask Portfolio Application for Mahmoud Mohamed Saleh"""
from flask import Flask, render_template
from data.content import PROFILE, SYSTEMS, EXPERIENCES, SKILLS, PROJECTS, EDUCATION, CERTIFICATIONS, LANGUAGES

app = Flask(__name__)

@app.route('/')
def index():
    return render_template(
        'index.html',
        profile=PROFILE,
        systems=SYSTEMS,
        experiences=EXPERIENCES,
        skills=SKILLS,
        projects=PROJECTS,
        education=EDUCATION,
        certifications=CERTIFICATIONS,
        languages=LANGUAGES
    )

if __name__ == '__main__':
    import os
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
