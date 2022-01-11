import React from 'react';

class QuestionSurvey extends React.Component {

    close() {
        this.props.onClose();
    }

    render() {
        return (
            <div>
                <h1>Question Survey</h1>
                <form>
                    <label>When I am finished reasoning an email, I usually...</label>
                    <ul>
                        <li>Put it somewhere I can see it, if it's important</li>
                        <li>Put it in it's respective folder, or any folder. I just like a clear space</li>
                        <li>Leave it where it is, I'll come back to it later if I need it again</li>
                        <li>Record all the important information and then delete it</li>
                    </ul>
                    <br />

                    <label>My email inbox is usually...</label>
                    <ul>
                        <li>Cluttered, but I search my inbox for what I need</li>
                        <li>Organized, everything has its own folder</li>
                        <li>Distributed among different folders, but the folders aren't really organized</li>
                        <li>Cluttered with mundane files, but my important projects have their own folders</li>
                    </ul>
                    <br />

                    <label>My desktop usually looks...</label>
                    <ul>
                        <li>Cluttered, with all the files/images I've used last</li>
                        <li>Relatively organized, but I sometimes have some miscellaneous files I haven't categorized yet</li>
                        <li>Clutter-free for the most part, but my individual files are a mess</li>
                        <li>A bit cluttered, but just with my daily project items</li>
                    </ul>
                    <br />

                    <label>Is it difficult to get rid of old files?</label>
                    <ul>
                        <li>Not really, I just haven't gotten around to it yet</li>
                        <li>Sometimes, I may need them later but don't know where to put them</li>
                        <li>I usually do a periodic purge of everything</li>
                        <li>I only delete files when my storage is full</li>
                    </ul>
                    <br />

                    <label>When it comes to organizing my desktop, I usually...</label>
                    <ul>
                        <li>Have to spend time purging folders before I can categorize anything</li>
                        <li>Place items in their respective folders when downloading them</li>
                        <li>Re-organize once a week</li>
                        <li>Want to have an organized desktop, but random files pile up so fast</li>
                    </ul>
                    <br />

                    <label>What would make my laptop easier to look at?</label>
                    <ul>
                        <li>All my important projects stored in files with cool icons</li>
                        <li>Everything organized in their respective folders equidistant from each other on my desktop</li>
                        <li>Everything stored out of sight except for a few widgets</li>
                        <li>All my current projects/important documents stored on my desktop for easy access</li>
                    </ul>
                    <br />

                    <label>When it comes to my display theme...</label>
                    <ul>
                        <li>Bright, fun, and ful of visual abundance</li>
                        <li>Minimal visual, functional, organized</li>
                        <li>Pretty, inviting, with minimal visual clutter</li>
                        <li>It depends on my mood, but I like to have things organized</li>
                    </ul>
                    <br />

                    <label>Organizing systems that work best for me are...</label>
                    <ul>
                        <li>Visual systems that are fast and easy to use, like hooks or open baskets on a shelf</li>
                        <li>Detailed systems that are hidden such as file cabinets or subdivided compartments</li>
                        <li>Hidden systems that are easy to use, such as baskets in the closet or drawer dividers</li>
                        <li>Visual systems that are carefully organized, such as pegboards or clear drawers</li>
                    </ul>
                    <br/>

                    <label>My biggest organizing challenge is</label>
                    <ul>
                        <li>I don't like to hide things out of sight; I'm afraid I will forget about them</li>
                        <li>I just haven't scheduled time to organize some areas efficiently</li>
                        <li>I tend to neglect hidden areas in my home, like storage rooms</li>
                        <li>I hate putting things away that I am just going to take out again later. Automate priority</li>
                    </ul>
                    <br />

                    <label>I prefer my daily-use items</label>
                    <ul>
                        <li>Out where I can easily use them and not misplace them</li>
                        <li>Organized properly and put away</li>
                        <li>Out of sight, but still fast and easy to find</li>
                        <li>Visible and organized properly for quick access</li>
                    </ul>
                    <br />

                    <label>I remember things best from</label>
                    <ul>
                        <li>Visual Pictures and instructions</li>
                        <li>Reading and researching about it</li>
                        <li>Someone showing me how to do it</li>
                        <li>Writing things down</li>
                    </ul>
                    <br />

                    <label>Pick the sentence that best describes you</label>
                    <ul>
                        <li>I struggle to put things away when I am done using them</li>
                        <li>I am a bit of a perfectionist, and I prefer minimal clutter</li>
                        <li>I like my home to appear spotless, but I hide things away where no one can see</li>
                        <li>I like functional spaces that make doing hobbies and working easier</li>
                    </ul>
                    <br />

                    <label>I like my favorite things to be...</label>
                    <ul>
                        <li>Out where I can always see them so they don't get misplaced</li>
                        <li>Stored or displayed properly so they will last</li>
                        <li>Neat and tidy and displayed in an eye-pleasing way</li>
                        <li>Organized in a visual and functional way</li>
                    </ul>
                    <br />

                    <label>I like to decorate my home</label>
                    <ul>
                        <li>With bold colors and artwork</li>
                        <li>With minimal, neutral colors</li>
                        <li>With current design trends</li>
                        <li>With useful, functional pieces</li>
                    </ul>
                    <br />

                    <label>I like my home to be...</label>
                    <ul>
                        <li>Fun, bright and cozy</li>
                        <li>Functional and minimal</li>
                        <li>Beautiful and minimal</li>
                        <li>Practical and efficient</li>
                    </ul>
                </form>
                <br/>
                <button onClick={() => this.close()}>Close survey!</button>
            </div>
        );
    }
}

export default QuestionSurvey;
