# Contributing to the Thresholds GenAI Website

Thank you for contributing article annotations to this site! This guide provides step-by-step instructions for adding content to placeholder article pages using GitHub's web interface.

## What You'll Need

- A GitHub account (free)
- The article citation and annotation text
- Basic familiarity with web browsers

**No coding experience required!** This guide walks you through every step.

---

## Quick Overview

There are currently **4 placeholder article pages** waiting for content:
- `articles/placeholder-5.html`
- `articles/placeholder-6.html`
- `articles/placeholder-7.html`
- `articles/placeholder-8.html`

You'll be replacing placeholder text with:
1. Article title
2. Author name(s)
3. Full APA citation
4. 2-3 paragraph summary/annotation

---

## Step-by-Step Instructions: Adding Article Content via GitHub Web Interface

### Step 1: Navigate to the Repository

1. Go to the GitHub repository for this project
2. Make sure you're logged into your GitHub account
3. You should see the file structure with folders like `articles/`, `css/`, `themes/`, etc.

### Step 2: Locate the Placeholder File

1. Click on the **`articles`** folder
2. You'll see a list of HTML files:
   - `nelson.html` (completed)
   - `velez.html` (completed)
   - `krueger.html` (completed)
   - `uanachain-aouad.html` (completed)
   - `placeholder-5.html` ← Start here
   - `placeholder-6.html`
   - `placeholder-7.html`
   - `placeholder-8.html`

3. Click on **`placeholder-5.html`** (or whichever placeholder you're working on)

### Step 3: Edit the File

1. Click the **pencil icon** (✏️) in the upper right corner of the file view
   - This icon says "Edit this file" when you hover over it
   - The file will open in GitHub's web editor

2. You'll see HTML code with placeholders like `[ARTICLE_TITLE]` and `[AUTHORS]`

### Step 4: Replace the Placeholders

Find and replace the following placeholders with your content:

#### A. Article Title
**Find:** `[ARTICLE_TITLE]`

**Replace with:** The full article title

**Example:**
```html
<!-- Before -->
<h1>[ARTICLE_TITLE]</h1>

<!-- After -->
<h1>Engaging with Generative AI: A Framework for Critical Digital Literacy</h1>
```

#### B. Author Names
**Find:** `[AUTHORS]`

**Replace with:** Author name(s) in APA format

**Examples:**
- Single author: `J. Smith`
- Two authors: `J. Smith & A. Johnson`
- Three+ authors: `J. Smith, A. Johnson, & B. Williams`

```html
<!-- Before -->
<p class="authors">[AUTHORS]</p>

<!-- After -->
<p class="authors">J. Smith & A. Johnson</p>
```

#### C. Full Citation
**Find:** `[FULL_CITATION]`

**Replace with:** Complete APA-style citation

**Example:**
```html
<!-- Before -->
<p class="citation">[FULL_CITATION]</p>

<!-- After -->
<p class="citation">Smith, J., & Johnson, A. (2025). Engaging with generative AI: A framework for critical digital literacy. <em>Thresholds in Education, 48</em>(1), 133-154.</p>
```

**Note:** Use `<em>` and `</em>` around the journal title to italicize it.

#### D. Article Summary
**Find:** `[ARTICLE_SUMMARY]`

**Replace with:** Your 2-3 paragraph annotation

**Should include:**
- Main argument or research question
- Key findings or contributions
- Pedagogical implications

**Example:**
```html
<!-- Before -->
<p>
  [ARTICLE_SUMMARY]
</p>

<!-- After -->
<p>
  Smith and Johnson propose a comprehensive framework for building critical digital literacy in the age of generative AI. Their framework centers on three core competencies: understanding AI capabilities and limitations, evaluating AI-generated content critically, and making informed decisions about when and how to use AI tools.
</p>

<p>
  Through a semester-long study in three first-year composition courses, the authors demonstrate that students who engaged with their framework showed significant improvements in both their critical thinking about AI and their ability to produce high-quality writing. The framework emphasizes hands-on experimentation combined with structured reflection.
</p>

<p>
  For educators seeking practical approaches to AI integration, this article offers a flexible, evidence-based framework adaptable to various teaching contexts and institutional constraints.
</p>
```

### Step 5: Optional - Add Key Contributions

If you want to add bullet points highlighting key contributions:

1. Find this commented-out section:
```html
<!-- Optional: Add Key Contributions section
<h3>Key Contributions</h3>
<ul>
  <li>[First key contribution]</li>
  <li>[Second key contribution]</li>
  <li>[Third key contribution]</li>
</ul>
-->
```

2. Remove the `<!--` at the start and `-->` at the end

3. Replace the placeholder text with actual contributions

**Example:**
```html
<h3>Key Contributions</h3>
<ul>
  <li>Three-part framework for critical digital literacy</li>
  <li>Empirical evidence from semester-long classroom study</li>
  <li>Adaptable approach for diverse teaching contexts</li>
  <li>Balance between AI engagement and critical skepticism</li>
</ul>
```

### Step 6: Optional - Add Article Link

If the article is available online:

1. Find this line:
```html
<!-- If article URL is available, uncomment and update the line below:
<a href="[ARTICLE_URL]" target="_blank" rel="noopener">Read the full article →</a>
-->
```

2. Remove the `<!--` at the start and `-->` at the end

3. Replace `[ARTICLE_URL]` with the actual URL

**Example:**
```html
<a href="https://example.com/article" target="_blank" rel="noopener">Read the full article →</a>
```

### Step 7: Remove the Placeholder Notice

1. Scroll down to find this section:
```html
<!-- PLACEHOLDER NOTICE - Remove this section when content is added -->
<div class="placeholder">
  <h2>Content Coming Soon</h2>
  <p>This article annotation is not yet complete...</p>
  <p>For step-by-step guidance, see <a href="../CONTRIBUTING.md">CONTRIBUTING.md</a></p>
</div>
```

2. **Delete the entire section** (from `<!-- PLACEHOLDER NOTICE` to `</div>`)

### Step 8: Preview Your Changes

1. Scroll to the top of the editor
2. Click the **"Preview"** tab to see how your changes will look
3. Check for any formatting issues or typos

### Step 9: Commit Your Changes

1. Scroll to the bottom of the page
2. You'll see a section titled **"Commit changes"**

3. In the first text box, write a brief description:
   ```
   Add annotation for Article 5
   ```

4. Optionally, add a longer description in the second text box:
   ```
   Added citation and summary for Smith & Johnson article on critical digital literacy framework
   ```

5. Select **"Commit directly to the [branch name] branch"**
   - OR create a new branch if you prefer to submit changes as a pull request

6. Click the green **"Commit changes"** button

### Step 10: Verify Your Changes

1. Navigate back to the `articles/` folder
2. Click on the file you just edited
3. Verify that all placeholders have been replaced
4. Check that the content looks correct

---

## Content Guidelines

### Writing Article Summaries

Your annotation should:

✅ **Be 2-3 paragraphs long**
✅ **Include:**
- Main argument or research question
- Key findings or approach
- Significance for educators/practitioners

✅ **Be clear and accessible** to readers who haven't read the full article

❌ **Avoid:**
- Direct quotes (use paraphrasing)
- Overly technical jargon
- Personal opinions (stay analytical)
- Very long paragraphs (break them up)

### Formatting Tips

1. **Paragraphs:** Each `<p>` tag should contain one paragraph
2. **Italics:** Use `<em>journal name</em>` for journal titles in citations
3. **Lists:** Keep bullet points concise and parallel in structure
4. **Line breaks:** Put each `<p>` tag on its own line for readability

### Example of Well-Formatted Content

```html
<section class="summary">
  <h2>Summary</h2>
  <p>
    Smith and Johnson explore how first-year writing students develop critical perspectives on AI-generated text through structured annotation activities. Their study involved 75 students across three sections who collaboratively annotated AI-generated essays on topics relevant to their coursework.
  </p>

  <p>
    Key findings include that students became more adept at identifying AI's characteristic patterns—lack of specificity, generic transitions, and absence of personal perspective—and that this analytical work transferred to improvements in their own writing. Students reported increased confidence in their ability to produce writing that AI could not replicate.
  </p>

  <p>
    The article offers a practical model for using AI-generated text as a teaching tool rather than a threat, demonstrating that critical engagement with AI can strengthen rather than undermine student writing skills.
  </p>

  <h3>Key Contributions</h3>
  <ul>
    <li>Collaborative annotation as a pedagogical method for AI literacy</li>
    <li>Evidence of skill transfer from AI critique to student writing</li>
    <li>Practical assignment design adaptable to various contexts</li>
  </ul>
</section>
```

---

## Troubleshooting

### "I don't see the pencil icon"
- Make sure you're logged into GitHub
- You may need write access to the repository
- Contact the repository owner for permissions

### "I made a mistake after committing"
- Don't worry! You can edit the file again
- Click the pencil icon and make corrections
- Commit the changes with a message like "Fix typo in Article 5"

### "The preview looks wrong"
- Make sure you didn't accidentally delete HTML tags like `<p>` or `</div>`
- Check that opening tags have closing tags: `<em>text</em>`
- If needed, click "Cancel" and start over

### "I'm not comfortable editing HTML"
- That's okay! You can send the content to a collaborator
- Provide: Article title, authors, citation, and summary text
- Someone else can add it to the file for you

---

## Getting Help

If you run into issues or have questions:

1. **Check the existing completed articles** (`nelson.html`, `velez.html`, etc.) for examples
2. **Review the HTML comments** in the placeholder files for guidance
3. **Contact the site maintainers:**
   - Jasmine Reece: [contact]
   - Eryn Paradise Shorthill: [contact]

---

## After Your Contribution

Once you've added content:

1. **The changes will appear on the live site** within a few minutes (after GitHub Pages rebuilds)
2. **Check the live site** to see your contribution
3. **Share the link** with others interested in the special issue

---

## Thank You!

Your contributions help make this resource valuable for educators and researchers exploring generative AI in education. We appreciate your time and effort! 🎓
