define({"title":"<span class=\"prodname\">\n            <span class=\"keyword\">Dolby Vision<\/span>\n         <\/span>","topics":[{"title":"Introduction","shortdesc":"<p>This documentation focuses on video editing of <span class=\"keyword\">Dolby Vision<\/span> files in an Android application, and covers support provided in a sample application for critical aspects on both <span class=\"keyword\">graphics processing unit<\/span> (<a href=\"g_6651.html\" title=\"graphics processing unit: A specialized electronic circuit designed for optimal use of memory and accelerated processing to create images in a frame buffer for output to a display device.\"><dfn class=\"term abbreviated-form\">GPU<\/dfn><\/a>) and <span class=\"keyword\">display processing unit<\/span> (<a href=\"g_6650.html\" title=\"display processing unit: A hardware component of a Qualcomm system-on-chip (SoC) designed for accelerated processing of visual data represented as pixels.\"><dfn class=\"term abbreviated-form\">DPU<\/dfn><\/a>)  platforms and corresponding <span class=\"keyword\">Dolby Vision<\/span> versions.<\/p>","href":"topics\/c_introduction.html","attributes":{"data-id":"c_introduction"},"menu":{"hasChildren":false},"tocID":"c_introduction-d4029e80771","topics":[]},{"title":"Display management","shortdesc":"<p>There are two versions of <span class=\"keyword\">Dolby Vision<\/span> capture; the version present on a device depends on the display management processing unit or platform used for <span class=\"keyword\">Dolby Vision<\/span>. It is critical that an application can determine which version is present, and can run correctly on both versions. Determining the version reliably involves examining the <span class=\"keyword\">Dolby Vision<\/span> codecs present on the device.<\/p>","href":"topics\/c_display_management.html","attributes":{"data-id":"c_display_management"},"menu":{"hasChildren":false},"tocID":"c_display_management-d4029e80856","topics":[]},{"title":"Editing using the GPU shaders","shortdesc":"<p>The sample application provides two <a href=\"g_6651.html\" title=\"graphics processing unit: A specialized electronic circuit designed for optimal use of memory and accelerated processing to create images in a frame buffer for output to a display device.\"><dfn class=\"term abbreviated-form\">GPU<\/dfn><\/a> (<span class=\"keyword\">graphics processing unit<\/span>) shaders for editing.  The <a href=\"g_6650.html\" title=\"display processing unit: A hardware component of a Qualcomm system-on-chip (SoC) designed for accelerated processing of visual data represented as pixels.\"><dfn class=\"term abbreviated-form\">DPU<\/dfn><\/a> (<span class=\"keyword\">display processing unit<\/span>) is not used for editing, but is used for display.<\/p>","href":"topics\/c_editing_gpu_shaders.html","attributes":{"data-id":"c_editing_gpu_shaders"},"menu":{"hasChildren":false},"tocID":"c_editing_gpu_shaders-d4029e80932","topics":[]},{"title":"HLG signaling and previewing","shortdesc":"<p>Adding support for <span class=\"keyword\">Dolby Vision<\/span> editing involves understanding how to process <span class=\"keyword\">hybrid log-gamma<\/span> (<a href=\"g_1906.html\" title=\"hybrid log-gamma: High-dynamic range standard format developed jointly by the British Broadcasting Corporation (BBC) and Nippon Hoso Kyokai (Japan Broadcasting Corporation), and defined in ARIB STD‑B67 and ETSI TS 101 154.\"><dfn class=\"term abbreviated-form\">HLG<\/dfn><\/a>) frames correctly so that the preview surface is aware of their format.<\/p>","href":"topics\/c_signaling_previewing.html","attributes":{"data-id":"c_signaling_preview"},"menu":{"hasChildren":false},"tocID":"c_signaling_preview-d4029e81009","topics":[]},{"title":"Trimming and remultiplexing","shortdesc":"<p>When trimming directly on an encoded video bitstream to preserve video quality, <span class=\"keyword\">Dolby Vision<\/span> multiplexer information must be added to the <span class=\"keyword\">MP4<\/span> file. <span class=\"keyword\">Dolby<\/span> provides a tool to do this that can be integrated into an application.<\/p>","href":"topics\/c_trimming_remuxing.html","attributes":{"data-id":"c_chapter3"},"menu":{"hasChildren":false},"tocID":"c_chapter3-d4029e81083","topics":[]},{"title":"Appendix","href":"topics\/r_appendix.html","attributes":{"data-id":"r_appendix"},"menu":{"hasChildren":false},"tocID":"r_appendix-d4029e81158","topics":[]},{"title":"Glossary","href":"topics\/r_ov_glossary.html","outputclass":"glossary","menu":{"hasChildren":false},"tocID":"tocId-d4029e81225","topics":[]},{"title":"Notices","href":"topics\/Chunk1228116482.html#Chunk1228116482","outputclass":"frontmatter","attributes":{"data-id":"Chunk1228116482"},"menu":{"hasChildren":false},"tocID":"Chunk1228116482-d4029e80571","next":"Chunk1228116482-d4029e80571"}]});