# Video-R4: Reinforcing Text-Rich Video Reasoning with Visual Rumination

> *[Yolo Yunlong Tang](https://yunlong10.github.io/)<sup>1</sup>,  [Daiki Shimada](https://scholar.google.com/citations?user=1uAwouQAAAAJ&hl=en)<sup>2</sup>, [Hang Hua](https://hanghuacs.notion.site/)<sup>3</sup>, [Chao Huang](https://wikichao.github.io/)<sup>1</sup>, [Jing Bi](https://jing.vision/)<sup>1</sup>, [Rogerio Feris](https://www.rogerioferis.org/)<sup>3</sup>, [Chenliang Xu](https://www.cs.rochester.edu/u/cxu22/)<sup>1</sup>*

> *<sup>1</sup>University of Rochester, <sup>2</sup>Sony Group Corporation, <sup>3</sup>MIT-IBM Watson AI Lab*

<p align="left">
  <a href="https://arxiv.org/abs/XXXX.XXXXX" target="_blank">
    <img src="https://img.shields.io/badge/arXiv-Paper-ff7575.svg?style=for-the-badge&logo=arxiv" alt="arXiv Paper">
  </a>
  <a href="https://yunlong10.github.io/video-r4-project" target="_blank">
    <img src="https://img.shields.io/badge/Project%20Page-ffb6c1.svg?style=for-the-badge&logo=github&logoColor=000" alt="Project Page">
  </a>
  <a href="https://huggingface.co/datasets/YOUR_DATASET_PATH" target="_blank">
    <img src="https://img.shields.io/badge/Huggingface-Dataset-87ceeb.svg?style=for-the-badge&logo=huggingface" alt="Huggingface Dataset">
  </a>
  <a href="https://huggingface.co/YOUR_MODEL_PATH" target="_blank">
    <img src="https://img.shields.io/badge/Huggingface-Model-bd7ad9.svg?style=for-the-badge&logo=huggingface" alt="Huggingface Model">
  </a>
</p>

## 🌟 News
- [2025-11-23] Introducing Video-R4, a reinforced video agent with visual rumination for text-rich video reasoning. The [arXiv paper](https://arxiv.org/abs/2511.xxxxx) has been released. Code, model, and dataset are coming soon.


## 🚀 Video-R4 Training Framework
<img src="assets/training_framework.png" width="100%">


## 📊 Data Curation Pipeline
<img src="assets/data_pipeline.png" width="100%">


## 📈 Performance
<img src="assets/bar.png" width="100%">

## 📦 Installation
```bash
conda create -n video-r4 python=3.10
conda activate video-r4
git clone https://github.com/yunlong10/Video-R4.git
cd Video-R4
pip install -r requirements.txt
```


## 📖 Citation
If you find this work useful, please consider citing:
```bibtex
@article{tang2025video-r4,
  title={Video-R4: Reinforcing Text-Rich Video Reasoning with Visual Rumination},
  author={Tang, Yunlong and Shimada, Daiku and Hua, Hang and Huang, Chao and Bi, Jing and Feris, Rogerio and Xu, Chenliang},
  journal={arXiv preprint arXiv:2511.xxxxx},
  year={2025}
}
```

## 🤝 Acknowledgments

This work was supported by Sony Group Corporation. We would like to thank Sayaka Nakamura and Jerry Jun Yokono for their insightful discussion.

We also thank the authors of the following projects for their contributions:
- [M4-ViteVQA](https://github.com/bytedance/VTVQA)
- [SlideVQA](https://github.com/nttmdlab-nlp/SlideVQA)
- [MP-DocVQA](https://github.com/rubenpt91/MP-DocVQA-Framework)
- [Open-R1](https://github.com/huggingface/open-r1)
- [OpenRLHF](https://github.com/OpenRLHF/OpenRLHF)
- [Ray](https://github.com/ray-project/ray)
- [Qwen2.5-VL](https://huggingface.co/collections/Qwen/qwen25-vl)
- [Video-R1](https://github.com/tulerfeng/Video-R1)
- [Pixel-Reasoner](https://github.com/TIGER-AI-Lab/Pixel-Reasoner)
- [DeepSeek-R1](https://github.com/deepseek-ai/DeepSeek-R1)
- [MVBench](https://huggingface.co/datasets/OpenGVLab/MVBench)
- [Video-MME](https://github.com/MME-Benchmarks/Video-MME)
- [Video-MMMU](https://videommmu.github.io/)      