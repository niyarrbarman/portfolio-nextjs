import Image from "next/image";
import { AppProps } from "next/app";

const Home = () => {
    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-between py-10 md:px-32 font-mono" id="">

                <div className="container mx-auto md:w-1/2 sm:w-auto">
                    {/* Website header */}
                    <div className="flex mt-4 items-center justify-center">
                        <Image
                                className="mx-20 w-44 h-44 rounded-full"
                                src="/niyar.jpeg"
                                alt="Niyar R Barman"
                                width={1000}
                                height={1000}
                                priority
                              />
                        <div className="md:mx-20">
                            <h1 className="md:text-2xl font-bold">Niyar R Barman</h1>
                            <p className="my-2"><a href="mailto:barmanniyar@gmail.com">barmanniyar@gmail.com</a></p>
                            <p className="my-2">AI Research Intern</p>
                            <p className="my-2">National Institute of Technology, Silchar</p>
                            <div className="flex my-1">
                                <div className="mr-10">
                                    <a href="https://github.com/niyarrbarman">
                                        <Image
                                            className="w-10 h-10"
                                            src="/github.png"
                                            alt="github"
                                            width={500}
                                            height={500}
                                            priority
                                        />
                                    </a>
                                </div>
                                <div className="mr-10">
                                    <a href="https://www.linkedin.com/in/niyar/">
                                        <Image
                                            className="w-10 h-10"
                                            src="/linkedin.png"
                                            alt="linkedin"
                                            width={500}
                                            height={500}
                                            priority
                                        />
                                    </a>
                                </div>
                                <div className="mr-10">
                                    <a href="#">
                                        <Image
                                            className="w-10 h-10"
                                            src="/scholar.png"
                                            alt="scholar"
                                            width={500}
                                            height={500}
                                            priority
                                        />
                                    </a>
                                </div>
                                <div className="mr-10">
                                    <a href="https://twitter.com/niyarrbarman">
                                        <Image
                                            className="w-10 h-10"
                                            src="/twitter.png"
                                            alt="twitter"
                                            width={500}
                                            height={500}
                                            priority
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end of website header */}

                    {/* Navigation bar */}
                    <div className="my-20">
                        <hr className="h-px bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-200 my-2 border-0" />
                        <div className="flex justify-center">

                            <div className="mx-14">
                                <a href="#about" className="transition-all hover:font-bold">
                                    About
                                </a>
                            </div>
                            <div className="mx-14">
                                <a href="#experience" className="transition-all hover:font-bold">Experience</a>
                            </div>
                            {/*<div className="mx-14">*/}
                            {/*    <a href="#osc" className="transition-all hover:font-bold">Open Source Contributions</a>*/}
                            {/*</div>*/}
                            <div className="mx-14">
                                <a href="/src/resume.pdf" className="transition-all hover:font-bold">Résumé</a>
                            </div>
                            <div className="mx-14">
                                <a href="#projects" className="transition-all hover:font-bold">Projects</a>
                            </div>
                            <div className="mx-14">
                                <a href="#publications" className="transition-all hover:font-bold">Publications</a>
                            </div>
                        </div>
                        <hr className="h-px bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-200 my-2 border-0" />
                    </div>

                    {/* end of Navigation bar */}

                    {/* Actual tab content */}
                    <div className="my-4">
                        <div className="mb-4" id="about">
                            <p>I am a student with dual pursuits: I am currently enrolled in the B.Tech program for Electronics and Communication Engineering at NIT Silchar, and simultaneously pursuing a B.S in Programming and Data Science from IIT Madras.</p>
                            <p>My interests lie in <b>Diffusion</b>, <b>Large Language Models</b>, and <b>Natural Language Processing</b>. My future research objectives revolves around creating language models that are more efficient and robust for real-world applications. I aim to explore their potential in enhancing natural language understanding and generating coherent and contextually relevant text.</p>
                        </div>

                        <div className="mb-4" id="experience">
                            <h2 className="my-4 text-lg underline">Experience</h2>
                            <ul className="list-disc list-inside">
                                <li className="my-2"><b>AI Research Intern @ <a href="https://aiisc.ai/">AIISC</a></b>:  [January 2023 - Present]</li>
                            </ul>
                        </div>
                        <div className="mb-4" id="osc">
                            <h2 className="my-4 text-lg underline">Open Source Contributions</h2>
                            <ul className="list-disc list-inside">
                                <li className="my-2"><a href="https://github.com/pytorch/examples/tree/main/vision_transformer" className="hover:underline">pytorch/examples: Implemented <b>Vision Transformer</b> using only native PyTorch libraries, trained on the CIFAR-10 dataset</a></li>
                                {/*<p className="ml-5">*/}
                                {/*    Conducted research on AI written text detection methods, specifically focusing on Perplexity and Negative Log*/}
                                {/*    Likelihood among six different methods.*/}
                                {/*</p>*/}

                            </ul>
                        </div>

                        <div className="mb-4" id="projects">
                            <h2 className="my-4 text-lg underline">Projects</h2>
                            <ul className="list-disc list-inside">
                                <li><a href="https://github.com/niyarrbarman/swiftGPT" className="hover:underline">swiftGPT: A model based on the <b>GPT-2 architecture</b>, specifically trained on a Taylor Swift songs dataset to generate new song lyrics in Taylor Swift’s writing style.</a></li>
                                <li><a href="https://github.com/niyarrbarman/mapsnap" className="hover:underline">MapSnap <b>(Winner Neurathon 2023)</b>: A model that does semantic segmentation of landslide affected areas from satellite images using the <b>Segformer</b></a></li>
                                <li><a href="https://github.com/niyarrbarman/DiagnoAI" className="hover:underline">DiagnoAI: It is a tool to detect a disease from a text description of the patient's symptoms and daily condition. It is based on a transformer model called <b>BERT</b>, fine-tuned for 24 common diseases. Created a custom dataset containing 24 disease and 50 manually written descriptions of the symptoms (in english) for each disease</a></li>
                                <li><a href="https://github.com/niyarrbarman/namegen-bigramlm" className="hover:underline">nameGen: It is a project that utilizes a <b>Bigram Language Model</b> to create realistic human-like names.</a></li>
                                <li><a href="https://github.com/niyarrbarman/RT-face-mask-InceptionV3" className="hover:underline">RT Face Mask Detection: It is a deep learning project that utilizes transfer learning on the <b>InceptionV3</b> model to accurately detect whether a person is wearing a face mask or not in real-time.</a></li>
                                <li><a href="https://github.com/niyarrbarman/namegen-bigramlm" className="hover:underline">CalmSpace: It is a sentiment analysis platform that enables users to record or upload audio files of their emotions. The platform utilizes a <b>Recurrent Neural Network (RNN)</b> architecture, predicts the emotions conveyed in the voice recordings.</a></li>
                                <li><a href="https://github.com/niyarrbarman/type-ninja" className="hover:underline">TypeNinja: It is an engaging typing game developed with ReactJS and TypeScript, designed to enhance your typing skills in a fun and interactive way.</a> Try it <a href="https://type-ninja.vercel.app/" className="hover:underline">here↗</a></li>
                                <li><a href="https://github.com/niyarrbarman/type-ninja" className="hover:underline">ProCity: It was a Twitter Bot programmed to automatically tweet graphical updates for the top 10 players in tarik's 10 man custom lobbies. Active between: [Jan 28, 2023 - Apr 2, 2023].</a> Click <a href="https://twitter.com/proCityUpdates/" className="hover:underline">here ↗</a> to view.</li>
                                <li><a href="https://github.com/niyarrbarman/Flood-Segmentation" className="hover:underline">FloodMent <b>(4th Place in Un-Flood Assam, A MeitY Hackathon)</b>: A standard fully convolutional UNet architecture with backbone model <b>EfficientNetb2</b> that identifies and segments flooded areas in aerial images.</a></li>
                                <li><a href="https://github.com/niyarrbarman/pneumonia" className="hover:underline">PneumoPred: A Deep CNN image classifier that takes chest x-rays as input and predicts whether or not the patient has pneumonia.</a></li>
                            </ul>
                        </div>

                        <div className="mb-4" id="publications">
                            <h2 className="my-4 text-lg underline">Publications</h2>
                            <ul className="list-disc list-inside">
                                <li>EMNLP 2023: under review...</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </main>

        </>
    );
};

export default Home;
