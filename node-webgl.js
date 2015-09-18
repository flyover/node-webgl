/**
 * Copyright (c) Flyover Games, LLC.  All rights reserved. 
 *  
 * Permission is hereby granted, free of charge, to any person 
 * obtaining a copy of this software and associated 
 * documentation files (the "Software"), to deal in the Software 
 * without restriction, including without limitation the rights 
 * to use, copy, modify, merge, publish, distribute, sublicense, 
 * and/or sell copies of the Software, and to permit persons to 
 * whom the Software is furnished to do so, subject to the 
 * following conditions: 
 *  
 * The above copyright notice and this permission notice shall 
 * be included in all copies or substantial portions of the 
 * Software. 
 *  
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY 
 * KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE 
 * WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR 
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR 
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR 
 * OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. 
 */

var util = require('util');

var node_webgl = module.exports = {};

/** 
 * @constructor
 */
var WebGLObject = node_webgl.WebGLObject = function () {}

/**
 * @type {boolean}
 */
WebGLObject.prototype.invalidated = false;

/** 
 * @constructor
 * @extends {WebGLObject}
 * @param {number} gl_buffer 
 */
var WebGLBuffer = node_webgl.WebGLBuffer = function (gl_buffer)
{
	WebGLObject.call(this);
	this.gl_buffer = gl_buffer;
}

util.inherits(WebGLBuffer, WebGLObject);

/**
 * @type {number}
 */
WebGLBuffer.prototype.gl_buffer = -1;

/** 
 * @constructor
 * @extends {WebGLObject}
 * @param {number} gl_texture 
 */
var WebGLTexture = node_webgl.WebGLTexture = function (gl_texture)
{
	WebGLObject.call(this);
	this.gl_texture = gl_texture;
}

util.inherits(WebGLTexture, WebGLObject);

/**
 * @type {number} gl_texture
 */
WebGLTexture.prototype.gl_texture = -1;

/** 
 * @constructor
 * @extends {WebGLObject}
 * @param {number} 
 */
var WebGLFramebuffer = node_webgl.WebGLFramebuffer = function (gl_framebuffer)
{
	WebGLObject.call(this);
	this.gl_framebuffer = gl_framebuffer;
}

util.inherits(WebGLFramebuffer, WebGLObject);

/**
 * @type {number}
 */
WebGLFramebuffer.prototype.gl_framebuffer = -1;

/** 
 * @constructor
 * @extends {WebGLObject}
 * @param {number} gl_renderbuffer 
 */
var WebGLRenderbuffer = node_webgl.WebGLRenderbuffer = function (gl_renderbuffer)
{
	WebGLObject.call(this);
	this.gl_renderbuffer = gl_renderbuffer;
}

util.inherits(WebGLRenderbuffer, WebGLObject);

/**
 * @type {number}
 */
WebGLRenderbuffer.prototype.gl_renderbuffer = -1;

/** 
 * @constructor
 * @extends {WebGLObject}
 * @param {number} gl_shader 
 */
var WebGLShader = node_webgl.WebGLShader = function (gl_shader)
{
	WebGLObject.call(this);
	this.gl_shader = gl_shader;
}

util.inherits(WebGLShader, WebGLObject);

/**
 * @type {number}
 */
WebGLShader.prototype.gl_shader = -1;

/** 
 * @constructor
 * @extends {WebGLObject}
 * @param {number} gl_program 
 */
var WebGLProgram = node_webgl.WebGLProgram = function (gl_program)
{
	WebGLObject.call(this);
	this.gl_program = gl_program;
}

util.inherits(WebGLProgram, WebGLObject);

/**
 * @type {number}
 */
WebGLProgram.prototype.gl_program = -1;

/** 
 * @constructor
 * @param {number} gl_location 
 */
var WebGLUniformLocation = node_webgl.WebGLUniformLocation = function (gl_location)
{
	this.gl_location = gl_location;
}

/**
 * @type {number}
 */
WebGLUniformLocation.prototype.gl_location = -1;

/** 
 * @constructor
 * @param {number} size 
 * @param {number} type 
 * @param {string} name 
 */
var WebGLActiveInfo = node_webgl.WebGLActiveInfo = function (size, type, name)
{
	this.size = size;
	this.type = type;
	this.name = name;
}

/**
 * @type {number}
 */
WebGLActiveInfo.prototype.size = 0;
/**
 * @type {number}
 */
WebGLActiveInfo.prototype.type = 0;
/**
 * @type {string}
 */
WebGLActiveInfo.prototype.name = "";

/**
 * @constructor
 * @param {number} rangeMin 
 * @param {number} rangeMax 
 * @param {number} precision 
 */
var WebGLShaderPrecisionFormat = node_webgl.WebGLShaderPrecisionFormat = function (rangeMin, rangeMax, precision)
{
	this.rangeMin = rangeMin;
	this.rangeMax = rangeMax;
	this.precision = precision;
}

/**
 * @type {number}
 */
WebGLShaderPrecisionFormat.prototype.rangeMin = 0;
/**
 * @type {number}
 */
WebGLShaderPrecisionFormat.prototype.rangeMax = 0;
/**
 * @type {number}
 */
WebGLShaderPrecisionFormat.prototype.precision = 0;

/**
 * @constructor
 */
var WebGLContextAttributes = node_webgl.WebGLContextAttributes = function ()
{
}

/**
 * @type {boolean}
 */
WebGLContextAttributes.prototype.alpha = true;
/**
 * @type {boolean}
 */
WebGLContextAttributes.prototype.depth = true;
/**
 * @type {boolean}
 */
WebGLContextAttributes.prototype.stencil = false;
/**
 * @type {boolean}
 */
WebGLContextAttributes.prototype.antialias = true;
/**
 * @type {boolean}
 */
WebGLContextAttributes.prototype.premultipliedAlpha = true;
/**
 * @type {boolean}
 */
WebGLContextAttributes.prototype.preserveDrawingBuffer = false;

/**
 * @constructor
 * @param {*} gles2 
 */
var WebGLRenderingContextBase = node_webgl.WebGLRenderingContextBase = function (gles2)
{
	var that = this;

	this.gl = gles2;

	this.gl.glEnable(this.gl.GL_POINT_SPRITE);
	var err = this.gl.glGetError();
	if (err)
	{
		console.log("error: 0x" + err.toString(16) + " glEnable(GL_POINT_SPRITE)");
	}

	this.gl.glEnable(this.gl.GL_VERTEX_PROGRAM_POINT_SIZE);
	var err = this.gl.glGetError();
	if (err)
	{
		console.log("error: 0x" + err.toString(16) + " glEnable(GL_VERTEX_PROGRAM_POINT_SIZE)");
	}

	var tmp = new Int32Array([ 0 ]);
	this.gl.glGetIntegerv(this.gl.GL_FRAMEBUFFER_BINDING, tmp);
	this.default_gl_framebuffer = tmp[0];
	//console.log(gl.glGetError());

	var tmp = new Int32Array([ 0 ]);
	this.gl.glGetIntegerv(this.gl.GL_RENDERBUFFER_BINDING, tmp);
	this.default_gl_renderbuffer = tmp[0];
	//console.log(gl.glGetError());

	//console.log(this.gl.glGetString(this.gl.GL_EXTENSIONS).replace(/^\s+|\s+$/g, "").split(' '));

	//console.log("MAX_FRAGMENT_UNIFORM_VECTORS", this.getParameter(this.MAX_FRAGMENT_UNIFORM_VECTORS));
	//console.log("MAX_VARYING_VECTORS", this.getParameter(this.MAX_VARYING_VECTORS));
	//console.log("MAX_VERTEX_UNIFORM_VECTORS", this.getParameter(this.MAX_VERTEX_UNIFORM_VECTORS));

	this.context_attributes = new WebGLContextAttributes();
	this.context_lost = false;

	this.canvas = {};
	this.canvas.style = {};
	this.canvas.width = 0;
	this.canvas.height = 0;
	this.canvas.getContext = function (type, attribs)
	{
		switch (type)
		{
		case 'webgl':
		case 'experimental-webgl':
			return that;
		}
		return null;
	}

	this.params = {};
	this.params[this.UNPACK_COLORSPACE_CONVERSION_WEBGL] = this.BROWSER_DEFAULT_WEBGL;
	this.params[this.UNPACK_FLIP_Y_WEBGL] = false;
	this.params[this.UNPACK_PREMULTIPLY_ALPHA_WEBGL] = false;
}

/**
 * @type {*}
 */
WebGLRenderingContextBase.prototype.gl = null;
/**
 * @type {number}
 */
WebGLRenderingContextBase.prototype.default_gl_framebuffer = 0;
/**
 * @type {number}
 */
WebGLRenderingContextBase.prototype.default_gl_renderbuffer = 0;
/**
 * @type {WebGLContextAttributes}
 */
WebGLRenderingContextBase.prototype.context_attributes;
/**
 * @type {boolean}
 */
WebGLRenderingContextBase.prototype.context_lost = false;

// ClearBufferMask
WebGLRenderingContextBase.prototype.DEPTH_BUFFER_BIT			 = 0x00000100;
WebGLRenderingContextBase.prototype.STENCIL_BUFFER_BIT  		 = 0x00000400;
WebGLRenderingContextBase.prototype.COLOR_BUFFER_BIT			 = 0x00004000;

// BeginMode
WebGLRenderingContextBase.prototype.POINTS  					 = 0x0000;
WebGLRenderingContextBase.prototype.LINES   					 = 0x0001;
WebGLRenderingContextBase.prototype.LINE_LOOP   				 = 0x0002;
WebGLRenderingContextBase.prototype.LINE_STRIP  				 = 0x0003;
WebGLRenderingContextBase.prototype.TRIANGLES   				 = 0x0004;
WebGLRenderingContextBase.prototype.TRIANGLE_STRIP  			 = 0x0005;
WebGLRenderingContextBase.prototype.TRIANGLE_FAN				 = 0x0006;

// AlphaFunction (not supported in ES20)
//  	NEVER
//  	LESS
//  	EQUAL
//  	LEQUAL
//  	GREATER
//  	NOTEQUAL
//  	GEQUAL
//  	ALWAYS

// BlendingFactorDest
WebGLRenderingContextBase.prototype.ZERO						 = 0;
WebGLRenderingContextBase.prototype.ONE 						 = 1;
WebGLRenderingContextBase.prototype.SRC_COLOR   				 = 0x0300;
WebGLRenderingContextBase.prototype.ONE_MINUS_SRC_COLOR 		 = 0x0301;
WebGLRenderingContextBase.prototype.SRC_ALPHA   				 = 0x0302;
WebGLRenderingContextBase.prototype.ONE_MINUS_SRC_ALPHA 		 = 0x0303;
WebGLRenderingContextBase.prototype.DST_ALPHA   				 = 0x0304;
WebGLRenderingContextBase.prototype.ONE_MINUS_DST_ALPHA 		 = 0x0305;

// BlendingFactorSrc
//  	ZERO
//  	ONE
WebGLRenderingContextBase.prototype.DST_COLOR   				 = 0x0306;
WebGLRenderingContextBase.prototype.ONE_MINUS_DST_COLOR 		 = 0x0307;
WebGLRenderingContextBase.prototype.SRC_ALPHA_SATURATE  		 = 0x0308;
//  	SRC_ALPHA
//  	ONE_MINUS_SRC_ALPHA
//  	DST_ALPHA
//  	ONE_MINUS_DST_ALPHA

// BlendEquationSeparate
WebGLRenderingContextBase.prototype.FUNC_ADD					 = 0x8006;
WebGLRenderingContextBase.prototype.BLEND_EQUATION  			 = 0x8009;
WebGLRenderingContextBase.prototype.BLEND_EQUATION_RGB  		 = 0x8009;   // same as BLEND_EQUATION
WebGLRenderingContextBase.prototype.BLEND_EQUATION_ALPHA		 = 0x883D;

// BlendSubtract
WebGLRenderingContextBase.prototype.FUNC_SUBTRACT   			 = 0x800A;
WebGLRenderingContextBase.prototype.FUNC_REVERSE_SUBTRACT   	 = 0x800B;

// Separate Blend Functions
WebGLRenderingContextBase.prototype.BLEND_DST_RGB   			 = 0x80C8;
WebGLRenderingContextBase.prototype.BLEND_SRC_RGB   			 = 0x80C9;
WebGLRenderingContextBase.prototype.BLEND_DST_ALPHA 			 = 0x80CA;
WebGLRenderingContextBase.prototype.BLEND_SRC_ALPHA 			 = 0x80CB;
WebGLRenderingContextBase.prototype.CONSTANT_COLOR  			 = 0x8001;
WebGLRenderingContextBase.prototype.ONE_MINUS_CONSTANT_COLOR	 = 0x8002;
WebGLRenderingContextBase.prototype.CONSTANT_ALPHA  			 = 0x8003;
WebGLRenderingContextBase.prototype.ONE_MINUS_CONSTANT_ALPHA	 = 0x8004;
WebGLRenderingContextBase.prototype.BLEND_COLOR 				 = 0x8005;

// Buffer Objects
WebGLRenderingContextBase.prototype.ARRAY_BUFFER				 = 0x8892;
WebGLRenderingContextBase.prototype.ELEMENT_ARRAY_BUFFER		 = 0x8893;
WebGLRenderingContextBase.prototype.ARRAY_BUFFER_BINDING		 = 0x8894;
WebGLRenderingContextBase.prototype.ELEMENT_ARRAY_BUFFER_BINDING = 0x8895;

WebGLRenderingContextBase.prototype.STREAM_DRAW 				 = 0x88E0;
WebGLRenderingContextBase.prototype.STATIC_DRAW 				 = 0x88E4;
WebGLRenderingContextBase.prototype.DYNAMIC_DRAW				 = 0x88E8;

WebGLRenderingContextBase.prototype.BUFFER_SIZE 				 = 0x8764;
WebGLRenderingContextBase.prototype.BUFFER_USAGE				 = 0x8765;

WebGLRenderingContextBase.prototype.CURRENT_VERTEX_ATTRIB   	 = 0x8626;

// CullFaceMode
WebGLRenderingContextBase.prototype.FRONT   					 = 0x0404;
WebGLRenderingContextBase.prototype.BACK						 = 0x0405;
WebGLRenderingContextBase.prototype.FRONT_AND_BACK  			 = 0x0408;

// DepthFunction
//  	NEVER
//  	LESS
//  	EQUAL
//  	LEQUAL
//  	GREATER
//  	NOTEQUAL
//  	GEQUAL
//  	ALWAYS

// EnableCap
// TEXTURE_2D
WebGLRenderingContextBase.prototype.CULL_FACE   				 = 0x0B44;
WebGLRenderingContextBase.prototype.BLEND   					 = 0x0BE2;
WebGLRenderingContextBase.prototype.DITHER  					 = 0x0BD0;
WebGLRenderingContextBase.prototype.STENCIL_TEST				 = 0x0B90;
WebGLRenderingContextBase.prototype.DEPTH_TEST  				 = 0x0B71;
WebGLRenderingContextBase.prototype.SCISSOR_TEST				 = 0x0C11;
WebGLRenderingContextBase.prototype.POLYGON_OFFSET_FILL 		 = 0x8037;
WebGLRenderingContextBase.prototype.SAMPLE_ALPHA_TO_COVERAGE	 = 0x809E;
WebGLRenderingContextBase.prototype.SAMPLE_COVERAGE 			 = 0x80A0;

// ErrorCode
WebGLRenderingContextBase.prototype.NO_ERROR					 = 0;
WebGLRenderingContextBase.prototype.INVALID_ENUM				 = 0x0500;
WebGLRenderingContextBase.prototype.INVALID_VALUE   			 = 0x0501;
WebGLRenderingContextBase.prototype.INVALID_OPERATION   		 = 0x0502;
WebGLRenderingContextBase.prototype.OUT_OF_MEMORY   			 = 0x0505;

// FrontFaceDirection
WebGLRenderingContextBase.prototype.CW  						 = 0x0900;
WebGLRenderingContextBase.prototype.CCW 						 = 0x0901;

// GetPName
WebGLRenderingContextBase.prototype.LINE_WIDTH  				 = 0x0B21;
WebGLRenderingContextBase.prototype.ALIASED_POINT_SIZE_RANGE	 = 0x846D;
WebGLRenderingContextBase.prototype.ALIASED_LINE_WIDTH_RANGE	 = 0x846E;
WebGLRenderingContextBase.prototype.CULL_FACE_MODE  			 = 0x0B45;
WebGLRenderingContextBase.prototype.FRONT_FACE  				 = 0x0B46;
WebGLRenderingContextBase.prototype.DEPTH_RANGE 				 = 0x0B70;
WebGLRenderingContextBase.prototype.DEPTH_WRITEMASK 			 = 0x0B72;
WebGLRenderingContextBase.prototype.DEPTH_CLEAR_VALUE   		 = 0x0B73;
WebGLRenderingContextBase.prototype.DEPTH_FUNC  				 = 0x0B74;
WebGLRenderingContextBase.prototype.STENCIL_CLEAR_VALUE 		 = 0x0B91;
WebGLRenderingContextBase.prototype.STENCIL_FUNC				 = 0x0B92;
WebGLRenderingContextBase.prototype.STENCIL_FAIL				 = 0x0B94;
WebGLRenderingContextBase.prototype.STENCIL_PASS_DEPTH_FAIL 	 = 0x0B95;
WebGLRenderingContextBase.prototype.STENCIL_PASS_DEPTH_PASS 	 = 0x0B96;
WebGLRenderingContextBase.prototype.STENCIL_REF 				 = 0x0B97;
WebGLRenderingContextBase.prototype.STENCIL_VALUE_MASK  		 = 0x0B93;
WebGLRenderingContextBase.prototype.STENCIL_WRITEMASK   		 = 0x0B98;
WebGLRenderingContextBase.prototype.STENCIL_BACK_FUNC   		 = 0x8800;
WebGLRenderingContextBase.prototype.STENCIL_BACK_FAIL   		 = 0x8801;
WebGLRenderingContextBase.prototype.STENCIL_BACK_PASS_DEPTH_FAIL = 0x8802;
WebGLRenderingContextBase.prototype.STENCIL_BACK_PASS_DEPTH_PASS = 0x8803;
WebGLRenderingContextBase.prototype.STENCIL_BACK_REF			 = 0x8CA3;
WebGLRenderingContextBase.prototype.STENCIL_BACK_VALUE_MASK 	 = 0x8CA4;
WebGLRenderingContextBase.prototype.STENCIL_BACK_WRITEMASK  	 = 0x8CA5;
WebGLRenderingContextBase.prototype.VIEWPORT					 = 0x0BA2;
WebGLRenderingContextBase.prototype.SCISSOR_BOX 				 = 0x0C10;
//  	SCISSOR_TEST
WebGLRenderingContextBase.prototype.COLOR_CLEAR_VALUE   		 = 0x0C22;
WebGLRenderingContextBase.prototype.COLOR_WRITEMASK 			 = 0x0C23;
WebGLRenderingContextBase.prototype.UNPACK_ALIGNMENT			 = 0x0CF5;
WebGLRenderingContextBase.prototype.PACK_ALIGNMENT  			 = 0x0D05;
WebGLRenderingContextBase.prototype.MAX_TEXTURE_SIZE			 = 0x0D33;
WebGLRenderingContextBase.prototype.MAX_VIEWPORT_DIMS   		 = 0x0D3A;
WebGLRenderingContextBase.prototype.SUBPIXEL_BITS   			 = 0x0D50;
WebGLRenderingContextBase.prototype.RED_BITS					 = 0x0D52;
WebGLRenderingContextBase.prototype.GREEN_BITS  				 = 0x0D53;
WebGLRenderingContextBase.prototype.BLUE_BITS   				 = 0x0D54;
WebGLRenderingContextBase.prototype.ALPHA_BITS  				 = 0x0D55;
WebGLRenderingContextBase.prototype.DEPTH_BITS  				 = 0x0D56;
WebGLRenderingContextBase.prototype.STENCIL_BITS				 = 0x0D57;
WebGLRenderingContextBase.prototype.POLYGON_OFFSET_UNITS		 = 0x2A00;
//  	POLYGON_OFFSET_FILL
WebGLRenderingContextBase.prototype.POLYGON_OFFSET_FACTOR   	 = 0x8038;
WebGLRenderingContextBase.prototype.TEXTURE_BINDING_2D  		 = 0x8069;
WebGLRenderingContextBase.prototype.SAMPLE_BUFFERS  			 = 0x80A8;
WebGLRenderingContextBase.prototype.SAMPLES 					 = 0x80A9;
WebGLRenderingContextBase.prototype.SAMPLE_COVERAGE_VALUE   	 = 0x80AA;
WebGLRenderingContextBase.prototype.SAMPLE_COVERAGE_INVERT  	 = 0x80AB;

// GetTextureParameter
//  	TEXTURE_MAG_FILTER
//  	TEXTURE_MIN_FILTER
//  	TEXTURE_WRAP_S
//  	TEXTURE_WRAP_T

WebGLRenderingContextBase.prototype.COMPRESSED_TEXTURE_FORMATS   = 0x86A3;

// HintMode
WebGLRenderingContextBase.prototype.DONT_CARE   				 = 0x1100;
WebGLRenderingContextBase.prototype.FASTEST 					 = 0x1101;
WebGLRenderingContextBase.prototype.NICEST  					 = 0x1102;

// HintTarget
WebGLRenderingContextBase.prototype.GENERATE_MIPMAP_HINT		 = 0x8192;

// DataType
WebGLRenderingContextBase.prototype.BYTE						 = 0x1400;
WebGLRenderingContextBase.prototype.UNSIGNED_BYTE   			 = 0x1401;
WebGLRenderingContextBase.prototype.SHORT   					 = 0x1402;
WebGLRenderingContextBase.prototype.UNSIGNED_SHORT  			 = 0x1403;
WebGLRenderingContextBase.prototype.INT 						 = 0x1404;
WebGLRenderingContextBase.prototype.UNSIGNED_INT				 = 0x1405;
WebGLRenderingContextBase.prototype.FLOAT   					 = 0x1406;

// PixelFormat
WebGLRenderingContextBase.prototype.DEPTH_COMPONENT 			 = 0x1902;
WebGLRenderingContextBase.prototype.ALPHA   					 = 0x1906;
WebGLRenderingContextBase.prototype.RGB 						 = 0x1907;
WebGLRenderingContextBase.prototype.RGBA						 = 0x1908;
WebGLRenderingContextBase.prototype.LUMINANCE   				 = 0x1909;
WebGLRenderingContextBase.prototype.LUMINANCE_ALPHA 			 = 0x190A;

// PixelType
//  	UNSIGNED_BYTE
WebGLRenderingContextBase.prototype.UNSIGNED_SHORT_4_4_4_4  	 = 0x8033;
WebGLRenderingContextBase.prototype.UNSIGNED_SHORT_5_5_5_1  	 = 0x8034;
WebGLRenderingContextBase.prototype.UNSIGNED_SHORT_5_6_5		 = 0x8363;

// Shaders
WebGLRenderingContextBase.prototype.FRAGMENT_SHADER 			 = 0x8B30;
WebGLRenderingContextBase.prototype.VERTEX_SHADER   			 = 0x8B31;
WebGLRenderingContextBase.prototype.MAX_VERTEX_ATTRIBS  		 = 0x8869;
WebGLRenderingContextBase.prototype.MAX_VERTEX_UNIFORM_VECTORS   = 0x8DFB;
WebGLRenderingContextBase.prototype.MAX_VARYING_VECTORS 		 = 0x8DFC;
WebGLRenderingContextBase.prototype.MAX_COMBINED_TEXTURE_IMAGE_UNITS = 0x8B4D;
WebGLRenderingContextBase.prototype.MAX_VERTEX_TEXTURE_IMAGE_UNITS = 0x8B4C;
WebGLRenderingContextBase.prototype.MAX_TEXTURE_IMAGE_UNITS 	 = 0x8872;
WebGLRenderingContextBase.prototype.MAX_FRAGMENT_UNIFORM_VECTORS = 0x8DFD;
WebGLRenderingContextBase.prototype.SHADER_TYPE 				 = 0x8B4F;
WebGLRenderingContextBase.prototype.DELETE_STATUS   			 = 0x8B80;
WebGLRenderingContextBase.prototype.LINK_STATUS 				 = 0x8B82;
WebGLRenderingContextBase.prototype.VALIDATE_STATUS 			 = 0x8B83;
WebGLRenderingContextBase.prototype.ATTACHED_SHADERS			 = 0x8B85;
WebGLRenderingContextBase.prototype.ACTIVE_UNIFORMS 			 = 0x8B86;
WebGLRenderingContextBase.prototype.ACTIVE_ATTRIBUTES   		 = 0x8B89;
WebGLRenderingContextBase.prototype.SHADING_LANGUAGE_VERSION	 = 0x8B8C;
WebGLRenderingContextBase.prototype.CURRENT_PROGRAM 			 = 0x8B8D;

// StencilFunction
WebGLRenderingContextBase.prototype.NEVER   					 = 0x0200;
WebGLRenderingContextBase.prototype.LESS						 = 0x0201;
WebGLRenderingContextBase.prototype.EQUAL   					 = 0x0202;
WebGLRenderingContextBase.prototype.LEQUAL  					 = 0x0203;
WebGLRenderingContextBase.prototype.GREATER 					 = 0x0204;
WebGLRenderingContextBase.prototype.NOTEQUAL					 = 0x0205;
WebGLRenderingContextBase.prototype.GEQUAL  					 = 0x0206;
WebGLRenderingContextBase.prototype.ALWAYS  					 = 0x0207;

// StencilOp
//  	ZERO
WebGLRenderingContextBase.prototype.KEEP						 = 0x1E00;
WebGLRenderingContextBase.prototype.REPLACE 					 = 0x1E01;
WebGLRenderingContextBase.prototype.INCR						 = 0x1E02;
WebGLRenderingContextBase.prototype.DECR						 = 0x1E03;
WebGLRenderingContextBase.prototype.INVERT  					 = 0x150A;
WebGLRenderingContextBase.prototype.INCR_WRAP   				 = 0x8507;
WebGLRenderingContextBase.prototype.DECR_WRAP   				 = 0x8508;

// StringName
WebGLRenderingContextBase.prototype.VENDOR  					 = 0x1F00;
WebGLRenderingContextBase.prototype.RENDERER					 = 0x1F01;
WebGLRenderingContextBase.prototype.VERSION 					 = 0x1F02;

// TextureMagFilter
WebGLRenderingContextBase.prototype.NEAREST 					 = 0x2600;
WebGLRenderingContextBase.prototype.LINEAR  					 = 0x2601;

// TextureMinFilter
//  	NEAREST
//  	LINEAR
WebGLRenderingContextBase.prototype.NEAREST_MIPMAP_NEAREST  	 = 0x2700;
WebGLRenderingContextBase.prototype.LINEAR_MIPMAP_NEAREST   	 = 0x2701;
WebGLRenderingContextBase.prototype.NEAREST_MIPMAP_LINEAR   	 = 0x2702;
WebGLRenderingContextBase.prototype.LINEAR_MIPMAP_LINEAR		 = 0x2703;

// TextureParameterName
WebGLRenderingContextBase.prototype.TEXTURE_MAG_FILTER  		 = 0x2800;
WebGLRenderingContextBase.prototype.TEXTURE_MIN_FILTER  		 = 0x2801;
WebGLRenderingContextBase.prototype.TEXTURE_WRAP_S  			 = 0x2802;
WebGLRenderingContextBase.prototype.TEXTURE_WRAP_T  			 = 0x2803;

// TextureTarget
WebGLRenderingContextBase.prototype.TEXTURE_2D  				 = 0x0DE1;
WebGLRenderingContextBase.prototype.TEXTURE 					 = 0x1702;

WebGLRenderingContextBase.prototype.TEXTURE_CUBE_MAP			 = 0x8513;
WebGLRenderingContextBase.prototype.TEXTURE_BINDING_CUBE_MAP	 = 0x8514;
WebGLRenderingContextBase.prototype.TEXTURE_CUBE_MAP_POSITIVE_X  = 0x8515;
WebGLRenderingContextBase.prototype.TEXTURE_CUBE_MAP_NEGATIVE_X  = 0x8516;
WebGLRenderingContextBase.prototype.TEXTURE_CUBE_MAP_POSITIVE_Y  = 0x8517;
WebGLRenderingContextBase.prototype.TEXTURE_CUBE_MAP_NEGATIVE_Y  = 0x8518;
WebGLRenderingContextBase.prototype.TEXTURE_CUBE_MAP_POSITIVE_Z  = 0x8519;
WebGLRenderingContextBase.prototype.TEXTURE_CUBE_MAP_NEGATIVE_Z  = 0x851A;
WebGLRenderingContextBase.prototype.MAX_CUBE_MAP_TEXTURE_SIZE    = 0x851C;

// TextureUnit
WebGLRenderingContextBase.prototype.TEXTURE0					 = 0x84C0;
WebGLRenderingContextBase.prototype.TEXTURE1					 = 0x84C1;
WebGLRenderingContextBase.prototype.TEXTURE2					 = 0x84C2;
WebGLRenderingContextBase.prototype.TEXTURE3					 = 0x84C3;
WebGLRenderingContextBase.prototype.TEXTURE4					 = 0x84C4;
WebGLRenderingContextBase.prototype.TEXTURE5					 = 0x84C5;
WebGLRenderingContextBase.prototype.TEXTURE6					 = 0x84C6;
WebGLRenderingContextBase.prototype.TEXTURE7					 = 0x84C7;
WebGLRenderingContextBase.prototype.TEXTURE8					 = 0x84C8;
WebGLRenderingContextBase.prototype.TEXTURE9					 = 0x84C9;
WebGLRenderingContextBase.prototype.TEXTURE10   				 = 0x84CA;
WebGLRenderingContextBase.prototype.TEXTURE11   				 = 0x84CB;
WebGLRenderingContextBase.prototype.TEXTURE12   				 = 0x84CC;
WebGLRenderingContextBase.prototype.TEXTURE13   				 = 0x84CD;
WebGLRenderingContextBase.prototype.TEXTURE14   				 = 0x84CE;
WebGLRenderingContextBase.prototype.TEXTURE15   				 = 0x84CF;
WebGLRenderingContextBase.prototype.TEXTURE16   				 = 0x84D0;
WebGLRenderingContextBase.prototype.TEXTURE17   				 = 0x84D1;
WebGLRenderingContextBase.prototype.TEXTURE18   				 = 0x84D2;
WebGLRenderingContextBase.prototype.TEXTURE19   				 = 0x84D3;
WebGLRenderingContextBase.prototype.TEXTURE20   				 = 0x84D4;
WebGLRenderingContextBase.prototype.TEXTURE21   				 = 0x84D5;
WebGLRenderingContextBase.prototype.TEXTURE22   				 = 0x84D6;
WebGLRenderingContextBase.prototype.TEXTURE23   				 = 0x84D7;
WebGLRenderingContextBase.prototype.TEXTURE24   				 = 0x84D8;
WebGLRenderingContextBase.prototype.TEXTURE25   				 = 0x84D9;
WebGLRenderingContextBase.prototype.TEXTURE26   				 = 0x84DA;
WebGLRenderingContextBase.prototype.TEXTURE27   				 = 0x84DB;
WebGLRenderingContextBase.prototype.TEXTURE28   				 = 0x84DC;
WebGLRenderingContextBase.prototype.TEXTURE29   				 = 0x84DD;
WebGLRenderingContextBase.prototype.TEXTURE30   				 = 0x84DE;
WebGLRenderingContextBase.prototype.TEXTURE31   				 = 0x84DF;
WebGLRenderingContextBase.prototype.ACTIVE_TEXTURE  			 = 0x84E0;

// TextureWrapMode
WebGLRenderingContextBase.prototype.REPEAT  					 = 0x2901;
WebGLRenderingContextBase.prototype.CLAMP_TO_EDGE   			 = 0x812F;
WebGLRenderingContextBase.prototype.MIRRORED_REPEAT 			 = 0x8370;

// Uniform Types
WebGLRenderingContextBase.prototype.FLOAT_VEC2  				 = 0x8B50;
WebGLRenderingContextBase.prototype.FLOAT_VEC3  				 = 0x8B51;
WebGLRenderingContextBase.prototype.FLOAT_VEC4  				 = 0x8B52;
WebGLRenderingContextBase.prototype.INT_VEC2					 = 0x8B53;
WebGLRenderingContextBase.prototype.INT_VEC3					 = 0x8B54;
WebGLRenderingContextBase.prototype.INT_VEC4					 = 0x8B55;
WebGLRenderingContextBase.prototype.BOOL						 = 0x8B56;
WebGLRenderingContextBase.prototype.BOOL_VEC2   				 = 0x8B57;
WebGLRenderingContextBase.prototype.BOOL_VEC3   				 = 0x8B58;
WebGLRenderingContextBase.prototype.BOOL_VEC4   				 = 0x8B59;
WebGLRenderingContextBase.prototype.FLOAT_MAT2  				 = 0x8B5A;
WebGLRenderingContextBase.prototype.FLOAT_MAT3  				 = 0x8B5B;
WebGLRenderingContextBase.prototype.FLOAT_MAT4  				 = 0x8B5C;
WebGLRenderingContextBase.prototype.SAMPLER_2D  				 = 0x8B5E;
WebGLRenderingContextBase.prototype.SAMPLER_CUBE				 = 0x8B60;

// Vertex Arrays
WebGLRenderingContextBase.prototype.VERTEX_ATTRIB_ARRAY_ENABLED  = 0x8622;
WebGLRenderingContextBase.prototype.VERTEX_ATTRIB_ARRAY_SIZE	 = 0x8623;
WebGLRenderingContextBase.prototype.VERTEX_ATTRIB_ARRAY_STRIDE   = 0x8624;
WebGLRenderingContextBase.prototype.VERTEX_ATTRIB_ARRAY_TYPE	 = 0x8625;
WebGLRenderingContextBase.prototype.VERTEX_ATTRIB_ARRAY_NORMALIZED = 0x886A;
WebGLRenderingContextBase.prototype.VERTEX_ATTRIB_ARRAY_POINTER  = 0x8645;
WebGLRenderingContextBase.prototype.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 0x889F;

// Read Format
WebGLRenderingContextBase.prototype.IMPLEMENTATION_COLOR_READ_TYPE   = 0x8B9A;
WebGLRenderingContextBase.prototype.IMPLEMENTATION_COLOR_READ_FORMAT = 0x8B9B;

// Shader Source
WebGLRenderingContextBase.prototype.COMPILE_STATUS  			 = 0x8B81;

// Shader Precision-Specified Types
WebGLRenderingContextBase.prototype.LOW_FLOAT   				 = 0x8DF0;
WebGLRenderingContextBase.prototype.MEDIUM_FLOAT				 = 0x8DF1;
WebGLRenderingContextBase.prototype.HIGH_FLOAT  				 = 0x8DF2;
WebGLRenderingContextBase.prototype.LOW_INT 					 = 0x8DF3;
WebGLRenderingContextBase.prototype.MEDIUM_INT  				 = 0x8DF4;
WebGLRenderingContextBase.prototype.HIGH_INT					 = 0x8DF5;

// Framebuffer Object.
WebGLRenderingContextBase.prototype.FRAMEBUFFER 				 = 0x8D40;
WebGLRenderingContextBase.prototype.RENDERBUFFER				 = 0x8D41;

WebGLRenderingContextBase.prototype.RGBA4   					 = 0x8056;
WebGLRenderingContextBase.prototype.RGB5_A1 					 = 0x8057;
WebGLRenderingContextBase.prototype.RGB565  					 = 0x8D62;
WebGLRenderingContextBase.prototype.DEPTH_COMPONENT16   		 = 0x81A5;
WebGLRenderingContextBase.prototype.STENCIL_INDEX   			 = 0x1901;
WebGLRenderingContextBase.prototype.STENCIL_INDEX8  			 = 0x8D48;
WebGLRenderingContextBase.prototype.DEPTH_STENCIL   			 = 0x84F9;

WebGLRenderingContextBase.prototype.RENDERBUFFER_WIDTH  		 = 0x8D42;
WebGLRenderingContextBase.prototype.RENDERBUFFER_HEIGHT 		 = 0x8D43;
WebGLRenderingContextBase.prototype.RENDERBUFFER_INTERNAL_FORMAT = 0x8D44;
WebGLRenderingContextBase.prototype.RENDERBUFFER_RED_SIZE   	 = 0x8D50;
WebGLRenderingContextBase.prototype.RENDERBUFFER_GREEN_SIZE 	 = 0x8D51;
WebGLRenderingContextBase.prototype.RENDERBUFFER_BLUE_SIZE  	 = 0x8D52;
WebGLRenderingContextBase.prototype.RENDERBUFFER_ALPHA_SIZE 	 = 0x8D53;
WebGLRenderingContextBase.prototype.RENDERBUFFER_DEPTH_SIZE 	 = 0x8D54;
WebGLRenderingContextBase.prototype.RENDERBUFFER_STENCIL_SIZE    = 0x8D55;

WebGLRenderingContextBase.prototype.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 0x8CD0;
WebGLRenderingContextBase.prototype.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 0x8CD1;
WebGLRenderingContextBase.prototype.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 0x8CD2;
WebGLRenderingContextBase.prototype.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 0x8CD3;

WebGLRenderingContextBase.prototype.COLOR_ATTACHMENT0   		 = 0x8CE0;
WebGLRenderingContextBase.prototype.DEPTH_ATTACHMENT			 = 0x8D00;
WebGLRenderingContextBase.prototype.STENCIL_ATTACHMENT  		 = 0x8D20;
WebGLRenderingContextBase.prototype.DEPTH_STENCIL_ATTACHMENT	 = 0x821A;

WebGLRenderingContextBase.prototype.NONE						 = 0;

WebGLRenderingContextBase.prototype.FRAMEBUFFER_COMPLETE		 = 0x8CD5;
WebGLRenderingContextBase.prototype.FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 0x8CD6;
WebGLRenderingContextBase.prototype.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 0x8CD7;
WebGLRenderingContextBase.prototype.FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 0x8CD9;
WebGLRenderingContextBase.prototype.FRAMEBUFFER_UNSUPPORTED 	 = 0x8CDD;

WebGLRenderingContextBase.prototype.FRAMEBUFFER_BINDING 		 = 0x8CA6;
WebGLRenderingContextBase.prototype.RENDERBUFFER_BINDING		 = 0x8CA7;
WebGLRenderingContextBase.prototype.MAX_RENDERBUFFER_SIZE   	 = 0x84E8;

WebGLRenderingContextBase.prototype.INVALID_FRAMEBUFFER_OPERATION = 0x0506;

// WebGL-specific enums
WebGLRenderingContextBase.prototype.UNPACK_FLIP_Y_WEBGL 		 = 0x9240;
WebGLRenderingContextBase.prototype.UNPACK_PREMULTIPLY_ALPHA_WEBGL = 0x9241;
WebGLRenderingContextBase.prototype.CONTEXT_LOST_WEBGL  		 = 0x9242;
WebGLRenderingContextBase.prototype.UNPACK_COLORSPACE_CONVERSION_WEBGL = 0x9243;
WebGLRenderingContextBase.prototype.BROWSER_DEFAULT_WEBGL   	 = 0x9244;

// readonly attribute HTMLCanvasElement canvas;
WebGLRenderingContextBase.prototype.canvas = null;
// readonly attribute GLsizei drawingBufferWidth;
WebGLRenderingContextBase.prototype.drawingBufferWidth = 0;
// readonly attribute GLsizei drawingBufferHeight;
WebGLRenderingContextBase.prototype.drawingBufferHeight = 0;

// [WebGLHandlesContextLoss] WebGLContextAttributes? getContextAttributes();
WebGLRenderingContextBase.prototype.getContextAttributes = function ()
{
	return this.context_attributes;
}

// [WebGLHandlesContextLoss] boolean isContextLost();
WebGLRenderingContextBase.prototype.isContextLost = function ()
{
	return this.context_lost;
}

var ANGLE_instanced_arrays = function () {}
ANGLE_instanced_arrays.prototype.VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE = 0x88FE;
ANGLE_instanced_arrays.prototype.drawArraysInstancedANGLE = function (mode, first, count, primcount) {}
ANGLE_instanced_arrays.prototype.drawElementsInstancedANGLE = function (mode, count, type, offset, primcount) {}
ANGLE_instanced_arrays.prototype.vertexAttribDivisorANGLE = function (index, divisor) {}

var EXT_texture_filter_anisotropic = function () {}
EXT_texture_filter_anisotropic.prototype.TEXTURE_MAX_ANISOTROPY_EXT		= 0x84FE;
EXT_texture_filter_anisotropic.prototype.MAX_TEXTURE_MAX_ANISOTROPY_EXT	= 0x84FF;

var OES_element_index_uint = function () {}

var OES_standard_derivatives = function () {}
OES_standard_derivatives.prototype.FRAGMENT_SHADER_DERIVATIVE_HINT_OES	= 0x8B8B;

var OES_texture_float = function () {}

var OES_texture_float_linear = function () {}

var OES_texture_half_float = function () {}
OES_texture_half_float.prototype.HALF_FLOAT_OES = 0x8D61;

var OES_texture_half_float_linear = function () {}

var WebGLVertexArrayObjectOES = node_webgl.WebGLVertexArrayObjectOES = function () {}

var OES_vertex_array_object = function () {}
OES_vertex_array_object.prototype.VERTEX_ARRAY_BINDING_OES = 0x85B5;
OES_vertex_array_object.prototype.createVertexArrayOES = function () { return new WebGLVertexArrayObjectOES(); }
OES_vertex_array_object.prototype.deleteVertexArrayOES = function (arrayObject) {}
OES_vertex_array_object.prototype.isVertexArrayOES = function (arrayObject) { return (arrayObject instanceof WebGLVertexArrayObjectOES); }
OES_vertex_array_object.prototype.bindVertexArrayOES = function (arrayObject) {}

var WEBGL_compressed_texture_s3tc = function () {}
WEBGL_compressed_texture_s3tc.prototype.COMPRESSED_RGB_S3TC_DXT1_EXT	= 0x83F0;
WEBGL_compressed_texture_s3tc.prototype.COMPRESSED_RGBA_S3TC_DXT1_EXT	= 0x83F1;
WEBGL_compressed_texture_s3tc.prototype.COMPRESSED_RGBA_S3TC_DXT3_EXT	= 0x83F2;
WEBGL_compressed_texture_s3tc.prototype.COMPRESSED_RGBA_S3TC_DXT5_EXT	= 0x83F3;

var WEBGL_debug_renderer_info = function () {}
WEBGL_debug_renderer_info.prototype.UNMASKED_VENDOR_WEBGL            = 0x9245;
WEBGL_debug_renderer_info.prototype.UNMASKED_RENDERER_WEBGL          = 0x9246;

var WEBGL_debug_shaders = function () {}
/**
 * @return {string}
 * @param {WebGLShader} shader
 */
WEBGL_debug_shaders.prototype.getTranslatedShaderSource = function (shader) { return ""; }

var WEBGL_depth_texture = function () {}
WEBGL_depth_texture.prototype.UNSIGNED_INT_24_8_WEBGL = 0x84FA;

var WEBGL_draw_buffers = function () {}
WEBGL_draw_buffers.prototype.COLOR_ATTACHMENT0_WEBGL     = 0x8CE0;
WEBGL_draw_buffers.prototype.COLOR_ATTACHMENT1_WEBGL     = 0x8CE1;
WEBGL_draw_buffers.prototype.COLOR_ATTACHMENT2_WEBGL     = 0x8CE2;
WEBGL_draw_buffers.prototype.COLOR_ATTACHMENT3_WEBGL     = 0x8CE3;
WEBGL_draw_buffers.prototype.COLOR_ATTACHMENT4_WEBGL     = 0x8CE4;
WEBGL_draw_buffers.prototype.COLOR_ATTACHMENT5_WEBGL     = 0x8CE5;
WEBGL_draw_buffers.prototype.COLOR_ATTACHMENT6_WEBGL     = 0x8CE6;
WEBGL_draw_buffers.prototype.COLOR_ATTACHMENT7_WEBGL     = 0x8CE7;
WEBGL_draw_buffers.prototype.COLOR_ATTACHMENT8_WEBGL     = 0x8CE8;
WEBGL_draw_buffers.prototype.COLOR_ATTACHMENT9_WEBGL     = 0x8CE9;
WEBGL_draw_buffers.prototype.COLOR_ATTACHMENT10_WEBGL    = 0x8CEA;
WEBGL_draw_buffers.prototype.COLOR_ATTACHMENT11_WEBGL    = 0x8CEB;
WEBGL_draw_buffers.prototype.COLOR_ATTACHMENT12_WEBGL    = 0x8CEC;
WEBGL_draw_buffers.prototype.COLOR_ATTACHMENT13_WEBGL    = 0x8CED;
WEBGL_draw_buffers.prototype.COLOR_ATTACHMENT14_WEBGL    = 0x8CEE;
WEBGL_draw_buffers.prototype.COLOR_ATTACHMENT15_WEBGL    = 0x8CEF;
WEBGL_draw_buffers.prototype.DRAW_BUFFER0_WEBGL          = 0x8825;
WEBGL_draw_buffers.prototype.DRAW_BUFFER1_WEBGL          = 0x8826;
WEBGL_draw_buffers.prototype.DRAW_BUFFER2_WEBGL          = 0x8827;
WEBGL_draw_buffers.prototype.DRAW_BUFFER3_WEBGL          = 0x8828;
WEBGL_draw_buffers.prototype.DRAW_BUFFER4_WEBGL          = 0x8829;
WEBGL_draw_buffers.prototype.DRAW_BUFFER5_WEBGL          = 0x882A;
WEBGL_draw_buffers.prototype.DRAW_BUFFER6_WEBGL          = 0x882B;
WEBGL_draw_buffers.prototype.DRAW_BUFFER7_WEBGL          = 0x882C;
WEBGL_draw_buffers.prototype.DRAW_BUFFER8_WEBGL          = 0x882D;
WEBGL_draw_buffers.prototype.DRAW_BUFFER9_WEBGL          = 0x882E;
WEBGL_draw_buffers.prototype.DRAW_BUFFER10_WEBGL         = 0x882F;
WEBGL_draw_buffers.prototype.DRAW_BUFFER11_WEBGL         = 0x8830;
WEBGL_draw_buffers.prototype.DRAW_BUFFER12_WEBGL         = 0x8831;
WEBGL_draw_buffers.prototype.DRAW_BUFFER13_WEBGL         = 0x8832;
WEBGL_draw_buffers.prototype.DRAW_BUFFER14_WEBGL         = 0x8833;
WEBGL_draw_buffers.prototype.DRAW_BUFFER15_WEBGL         = 0x8834;
WEBGL_draw_buffers.prototype.MAX_COLOR_ATTACHMENTS_WEBGL = 0x8CDF;
WEBGL_draw_buffers.prototype.MAX_DRAW_BUFFERS_WEBGL      = 0x8824;
/**
 * @return {void}
 * @param {Array.<number>} buffers
 */
WEBGL_draw_buffers.prototype.drawBuffersWEBGL = function (buffers) {}

var WEBGL_lose_context = function () {}
/**
 * @return {void}
 */
WEBGL_lose_context.prototype.loseContext = function () {}
/**
 * @return {void}
 */
WEBGL_lose_context.prototype.restoreContext = function () {}

// sequence<DOMString>? getSupportedExtensions();
WebGLRenderingContextBase.prototype.getSupportedExtensions = function ()
{
	var gl_extensions_str = this.gl.glGetString(this.gl.GL_EXTENSIONS) || "";
	var gl_extensions = gl_extensions_str.replace(/^\s+|\s+$/g, "").split(' ');

	//console.log(gl_extensions);

	var map = {};
	map['GL_EXT_texture_compression_s3tc'	] = 'WEBGL_compressed_texture_s3tc';
	map['GL_EXT_texture_filter_anisotropic'	] = 'EXT_texture_filter_anisotropic';
	map['GL_OES_standard_derivatives'		] = 'OES_standard_derivatives';
	map['GL_ARB_texture_float'				] = 'OES_texture_float';
	map['GL_ATI_texture_float'  			] = 'OES_texture_float';
	map['GL_OES_texture_float'  			] = 'OES_texture_float';
	map['GL_ARB_texture_float_linear'		] = 'OES_texture_float_linear';
	map['GL_ATI_texture_float_linear'		] = 'OES_texture_float_linear';
	map['GL_OES_texture_float_linear'   	] = 'OES_texture_float_linear';

	var extensions = [];
	for (var i in map)
	{
		if ((gl_extensions.indexOf(i) !== -1) && (extensions.indexOf(map[i]) === -1))
		{
			extensions.push(map[i]);
		}
	}
	return extensions;
}

// object? getExtension(DOMString name);
WebGLRenderingContextBase.prototype.getExtension = function (name)
{
	//var extensions = this.getSupportedExtensions();
	var gl_extensions_str = this.gl.glGetString(this.gl.GL_EXTENSIONS) || "";
	var extensions = gl_extensions_str.replace(/^\s+|\s+$/g, "").split(' ');
	var extension = null;
	switch (name)
	{
	case 'WEBGL_compressed_texture_s3tc':
	case 'MOZ_WEBGL_compressed_texture_s3tc':
	case 'WEBKIT_WEBGL_compressed_texture_s3tc':
		if (extensions.indexOf('GL_EXT_texture_compression_s3tc') !== -1)
		{
			extension = new WEBGL_compressed_texture_s3tc();
		}
		break;
	case 'EXT_texture_filter_anisotropic':
	case 'MOZ_EXT_texture_filter_anisotropic':
	case 'WEBKIT_EXT_texture_filter_anisotropic':
		if (extensions.indexOf('GL_EXT_texture_filter_anisotropic') !== -1)
		{
			extension = new EXT_texture_filter_anisotropic();
		}
		break;
	case 'OES_element_index_uint':
		if ((extensions.indexOf('GL_OES_element_index_uint') !== -1) || true) // hack
		{
			extension = new OES_element_index_uint();
		}
		break;
	case 'OES_standard_derivatives':
		if ((extensions.indexOf('GL_OES_standard_derivatives') !== -1) || true) // hack
		{
			extension = new OES_standard_derivatives();
		}
		break;
	case 'OES_texture_float':
		if ((extensions.indexOf('GL_ARB_texture_float') !== -1) ||
			(extensions.indexOf('GL_ATI_texture_float') !== -1) ||
			(extensions.indexOf('GL_OES_texture_float') !== -1) || true) // hack
		{
			extension = new OES_texture_float();
		}
		break;
	case 'OES_texture_float_linear':
		if ((extensions.indexOf('GL_ARB_texture_float_linear') !== -1) ||
			(extensions.indexOf('GL_ATI_texture_float_linear') !== -1) ||
			(extensions.indexOf('GL_OES_texture_float_linear') !== -1) || true) // hack
		{
			extension = new OES_texture_float_linear();
		}
		break;
	case 'OES_texture_half_float':
		extension = new OES_texture_half_float();
		break;
	case 'OES_texture_half_float_linear':
		extension = new OES_texture_half_float_linear();
		break;
	}

	return extension;
}

// void activeTexture(GLenum texture);
WebGLRenderingContextBase.prototype.activeTexture = function (texture)
{
	this.gl.glActiveTexture(texture);
}

// void attachShader(WebGLProgram? program, WebGLShader? shader);
WebGLRenderingContextBase.prototype.attachShader = function (program, shader)
{
	this.gl.glAttachShader(program && program.gl_program, shader && shader.gl_shader);
}

// void bindAttribLocation(WebGLProgram? program, GLuint index, DOMString name);
WebGLRenderingContextBase.prototype.bindAttribLocation = function (program, index, name)
{
	this.gl.glBindAttribLocation(program && program.gl_program, index, name);
}

// void bindBuffer(GLenum target, WebGLBuffer? buffer);
WebGLRenderingContextBase.prototype.bindBuffer = function (target, buffer)
{
	if (buffer)
	{
		this.gl.glBindBuffer(target, buffer.gl_buffer);
	}
	else
	{
		this.gl.glBindBuffer(target, 0);
	}
}

// void bindFramebuffer(GLenum target, WebGLFramebuffer? framebuffer);
WebGLRenderingContextBase.prototype.bindFramebuffer = function (target, framebuffer)
{
	if (framebuffer)
	{
		this.gl.glBindFramebuffer(target, framebuffer.gl_framebuffer);
	}
	else
	{
		this.gl.glBindFramebuffer(target, this.default_gl_framebuffer);
	}
}

// void bindRenderbuffer(GLenum target, WebGLRenderbuffer? renderbuffer);
WebGLRenderingContextBase.prototype.bindRenderbuffer = function (target, renderbuffer)
{
	if (renderbuffer)
	{
		this.gl.glBindRenderbuffer(target, renderbuffer.gl_renderbuffer);
	}
	else
	{
		this.gl.glBindRenderbuffer(target, this.default_gl_renderbuffer);
	}
}

// void bindTexture(GLenum target, WebGLTexture? texture);
WebGLRenderingContextBase.prototype.bindTexture = function (target, texture)
{
	if (texture)
	{
		this.gl.glBindTexture(target, texture.gl_texture);
	}
	else
	{
		this.gl.glBindTexture(target, 0);
	}
}

// void blendColor(GLclampf red, GLclampf green, GLclampf blue, GLclampf alpha);
WebGLRenderingContextBase.prototype.blendColor = function (red, green, blue, alpha)
{
	this.gl.glBlendColor(red, green, blue, alpha);
}

// void blendEquation(GLenum mode);
WebGLRenderingContextBase.prototype.blendEquation = function (mode)
{
	this.gl.glBlendEquation(mode);
}

// void blendEquationSeparate(GLenum modeRGB, GLenum modeAlpha);
WebGLRenderingContextBase.prototype.blendEquationSeparate = function (modeRGB, modeAlpha)
{
	this.gl.glBlendEquationSeparate(modeRGB, modeAlpha);
}

// void blendFunc(GLenum sfactor, GLenum dfactor);
WebGLRenderingContextBase.prototype.blendFunc = function (sfactor, dfactor)
{
	this.gl.glBlendFunc(sfactor, dfactor);
}

// void blendFuncSeparate(GLenum srcRGB, GLenum dstRGB, GLenum srcAlpha, GLenum dstAlpha);
WebGLRenderingContextBase.prototype.blendFuncSeparate = function (srcRGB, dstRGB, srcAlpha, dstAlpha)
{
	this.gl.glBlendFuncSeparate(srcRGB, dstRGB, srcAlpha, dstAlpha);
}

// void bufferData(GLenum target, GLsizeiptr size, GLenum usage);
// void bufferData(GLenum target, ArrayBufferView data, GLenum usage);
// void bufferData(GLenum target, ArrayBuffer? data, GLenum usage);
WebGLRenderingContextBase.prototype.bufferData = function (target, data, usage)
{
	if (typeof(data) === 'number')
	{
		this.gl.glBufferData(target, data, new Uint8Array(data), usage);
	}
	else if (ArrayBuffer.isView(data))
	{
		this.gl.glBufferData(target, data.byteLength, data, usage);
	}
	else if (data instanceof ArrayBuffer)
	{
		this.gl.glBufferData(target, data.byteLength, new Uint8Array(data), usage);
	}
	else
	{
		throw new Error();
	}
}

// void bufferSubData(GLenum target, GLintptr offset, ArrayBufferView data);
// void bufferSubData(GLenum target, GLintptr offset, ArrayBuffer? data);
WebGLRenderingContextBase.prototype.bufferSubData = function (target, offset, data)
{
	if (ArrayBuffer.isView(data))
	{
		this.gl.glBufferSubData(target, offset, data.byteLength, data);
	}
	else if (data instanceof ArrayBuffer)
	{
		this.gl.glBufferSubData(target, offset, data.byteLength, new Uint8Array(data));
	}
	else
	{
		throw new Error();
	}
}

// [WebGLHandlesContextLoss] GLenum checkFramebufferStatus(GLenum target);
WebGLRenderingContextBase.prototype.checkFramebufferStatus = function (target)
{
	this.gl.glCheckFramebufferStatus(target);
}

// void clear(GLbitfield mask);
WebGLRenderingContextBase.prototype.clear = function (mask)
{
	this.gl.glClear(mask);
}

// void clearColor(GLclampf red, GLclampf green, GLclampf blue, GLclampf alpha);
WebGLRenderingContextBase.prototype.clearColor = function (red, green, blue, alpha)
{
	this.gl.glClearColor(red, green, blue, alpha);
}

// void clearDepth(GLclampf depth);
WebGLRenderingContextBase.prototype.clearDepth = function (depth)
{
	this.gl.glClearDepthf(depth);
}

// void clearStencil(GLint s);
WebGLRenderingContextBase.prototype.clearStencil = function (s)
{
	this.gl.glClearStencil(s);
}

// void colorMask(GLboolean red, GLboolean green, GLboolean blue, GLboolean alpha);
WebGLRenderingContextBase.prototype.colorMask = function (red, green, blue, alpha)
{
	this.gl.glColorMask(red, green, blue, alpha);
}

// void compileShader(WebGLShader? shader);
WebGLRenderingContextBase.prototype.compileShader = function (shader)
{
	this.gl.glCompileShader(shader && shader.gl_shader);
}

// void compressedTexImage2D(GLenum target, GLint level, GLenum internalformat, GLsizei width, GLsizei height, GLint border, ArrayBufferView data);
WebGLRenderingContextBase.prototype.compressedTexImage2D = function (target, level, internalformat, width, height, border, data)
{
	//console.log(width, height, data.byteLength, data.length);
	this.gl.glCompressedTexImage2D(target, level, internalformat, width, height, border, data.byteLength, data);
}

// void compressedTexSubImage2D(GLenum target, GLint level, GLint xoffset, GLint yoffset, GLsizei width, GLsizei height, GLenum format, ArrayBufferView data);
WebGLRenderingContextBase.prototype.compressedTexSubImage2D = function (target, level, xoffset, yoffset, width, height, format, data)
{
	this.gl.glCompressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, data.byteLength, data);
}

// void copyTexImage2D(GLenum target, GLint level, GLenum internalformat, GLint x, GLint y, GLsizei width, GLsizei height, GLint border);
WebGLRenderingContextBase.prototype.copyTexImage2D = function (target, level, internalformat, x, y, width, height, border)
{
	this.gl.glCopyTexImage2D(target, level, internalformat, x, y, width, height, border);
}

// void copyTexSubImage2D(GLenum target, GLint level, GLint xoffset, GLint yoffset, GLint x, GLint y, GLsizei width, GLsizei height);
WebGLRenderingContextBase.prototype.copyTexSubImage2D = function (target, level, xoffset, yoffset, x, y, width, height)
{
	this.gl.glCopyTexSubImage2D(target, level, xoffset, yoffset, x, y, width, height);
}

// WebGLBuffer? createBuffer();
WebGLRenderingContextBase.prototype.createBuffer = function ()
{
	var buffers = WebGLRenderingContextBase.prototype.createBuffer.s_buffers;
	this.gl.glGenBuffers(buffers.length, buffers);
	return new WebGLBuffer(buffers[0]);
}
WebGLRenderingContextBase.prototype.createBuffer.s_buffers = new Uint32Array(1);

// WebGLFramebuffer? createFramebuffer();
WebGLRenderingContextBase.prototype.createFramebuffer = function ()
{
	var framebuffers = WebGLRenderingContextBase.prototype.createFramebuffer.s_framebuffers;
	this.gl.glGenFramebuffers(framebuffers.length, framebuffers);
	return new WebGLFramebuffer(framebuffers[0]);
}
WebGLRenderingContextBase.prototype.createFramebuffer.s_framebuffers = new Uint32Array(1);

// WebGLProgram? createProgram();
WebGLRenderingContextBase.prototype.createProgram = function ()
{
	var gl_program = this.gl.glCreateProgram();
	if (gl_program)
	{
		return new WebGLProgram(gl_program);
	}
	return null;
}

// WebGLRenderbuffer? createRenderbuffer();
WebGLRenderingContextBase.prototype.createRenderbuffer = function ()
{
	var renderbuffers = WebGLRenderingContextBase.prototype.createRenderbuffer.s_renderbuffers;
	this.gl.glGenRenderbuffers(renderbuffers.length, renderbuffers);
	return new WebGLRenderbuffer(renderbuffers[0]);
}
WebGLRenderingContextBase.prototype.createRenderbuffer.s_renderbuffers = new Uint32Array(1);

// WebGLShader? createShader(GLenum type);
WebGLRenderingContextBase.prototype.createShader = function (type)
{
	return new WebGLShader(this.gl.glCreateShader(type));
}

// WebGLTexture? createTexture();
WebGLRenderingContextBase.prototype.createTexture = function ()
{
	var textures = WebGLRenderingContextBase.prototype.createTexture.s_textures;
	this.gl.glGenTextures(textures.length, textures);
	return new WebGLTexture(textures[0]);
}
WebGLRenderingContextBase.prototype.createTexture.s_textures = new Uint32Array(1);

// void cullFace(GLenum mode);
WebGLRenderingContextBase.prototype.cullFace = function (mode)
{
	this.gl.glCullFace(mode);
}

// void deleteBuffer(WebGLBuffer? buffer);
WebGLRenderingContextBase.prototype.deleteBuffer = function (buffer)
{
	if (buffer)
	{
		var buffers = new Uint32Array([ buffer.gl_buffer ]);
		this.gl.glDeleteBuffers(buffers.length, buffers);
		buffer.gl_buffer = -1;
	}
}

// void deleteFramebuffer(WebGLFramebuffer? framebuffer);
WebGLRenderingContextBase.prototype.deleteFramebuffer = function (framebuffer)
{
	if (framebuffer)
	{
		var framebuffers = new Uint32Array([ framebuffer.gl_framebuffer ]);
		this.gl.glDeleteFramebuffers(framebuffers.length, framebuffers);
		framebuffer.gl_framebuffer = -1;
	}
}

// void deleteProgram(WebGLProgram? program);
WebGLRenderingContextBase.prototype.deleteProgram = function (program)
{
	if (program)
	{
		this.gl.glDeleteProgram(program && program.gl_program);
		program.gl_program = -1;
	}
}

// void deleteRenderbuffer(WebGLRenderbuffer? renderbuffer);
WebGLRenderingContextBase.prototype.deleteRenderbuffer = function (renderbuffer)
{
	if (renderbuffer)
	{
		var renderbuffers = new Uint32Array([ renderbuffer.gl_renderbuffer ]);
		this.gl.glDeleteRenderbuffers(renderbuffers.length, renderbuffers);
		renderbuffer.gl_renderbuffer = -1;
	}
}

// void deleteShader(WebGLShader? shader);
WebGLRenderingContextBase.prototype.deleteShader = function (shader)
{
	if (shader)
	{
		this.gl.glDeleteShader(shader.gl_shader);
		shader.gl_shader = -1;
	}
}

// void deleteTexture(WebGLTexture? texture);
WebGLRenderingContextBase.prototype.deleteTexture = function (texture)
{
	if (texture)
	{
		var textures = new Uint32Array([ texture.gl_texture ]);
		this.gl.glDeleteTextures(textures.length, textures);
		texture.gl_texture = -1;
	}
}

// void depthFunc(GLenum func);
WebGLRenderingContextBase.prototype.depthFunc = function (func)
{
	this.gl.glDepthFunc(func);
}

// void depthMask(GLboolean flag);
WebGLRenderingContextBase.prototype.depthMask = function (flag)
{
	this.gl.glDepthMask(flag);
}

// void depthRange(GLclampf zNear, GLclampf zFar);
WebGLRenderingContextBase.prototype.depthRange = function (zNear, zFar)
{
	this.gl.glDepthRangef(zNear, zFar);
}

// void detachShader(WebGLProgram? program, WebGLShader? shader);
WebGLRenderingContextBase.prototype.detachShader = function (program, shader)
{
	this.gl.glDetachShader(program && program.gl_program, shader && shader.gl_shader);
}

// void disable(GLenum cap);
WebGLRenderingContextBase.prototype.disable = function (cap)
{
	this.gl.glDisable(cap);
}

// void disableVertexAttribArray(GLuint index);
WebGLRenderingContextBase.prototype.disableVertexAttribArray = function (index)
{
	if (typeof(index) !== 'number')
	{
		return; // TODO
	}
	this.gl.glDisableVertexAttribArray(index);
}

// void drawArrays(GLenum mode, GLint first, GLsizei count);
WebGLRenderingContextBase.prototype.drawArrays = function (mode, first, count)
{
	this.gl.glDrawArrays(mode, first, count);
}

// void drawElements(GLenum mode, GLsizei count, GLenum type, GLintptr offset);
WebGLRenderingContextBase.prototype.drawElements = function (mode, count, type, offset)
{
	this.gl.glDrawElements(mode, count, type, offset);
}

// void enable(GLenum cap);
WebGLRenderingContextBase.prototype.enable = function (cap)
{
	this.gl.glEnable(cap);
}

// void enableVertexAttribArray(GLuint index);
WebGLRenderingContextBase.prototype.enableVertexAttribArray = function (index)
{
	if (typeof(index) !== 'number')
	{
		return; // TODO
	}
	this.gl.glEnableVertexAttribArray(index);
}

// void finish();
WebGLRenderingContextBase.prototype.finish = function ()
{
	this.gl.glFinish();
}

// void flush();
WebGLRenderingContextBase.prototype.flush = function ()
{
	this.gl.glFlush();
}

// void framebufferRenderbuffer(GLenum target, GLenum attachment, GLenum renderbuffertarget, WebGLRenderbuffer? renderbuffer);
WebGLRenderingContextBase.prototype.framebufferRenderbuffer = function (target, attachment, renderbuffertarget, renderbuffer)
{
	this.gl.glFramebufferRenderbuffer(target, attachment, renderbuffertarget, renderbuffer && renderbuffer.gl_renderbuffer);
}

// void framebufferTexture2D(GLenum target, GLenum attachment, GLenum textarget, WebGLTexture? texture, GLint level);
WebGLRenderingContextBase.prototype.framebufferTexture2D = function (target, attachment, textarget, texture, level)
{
	this.gl.glFramebufferTexture2D(target, attachment, textarget, texture && texture.gl_texture, level);
}

// void frontFace(GLenum mode);
WebGLRenderingContextBase.prototype.frontFace = function (mode)
{
	this.gl.glFrontFace(mode);
}

// void generateMipmap(GLenum target);
WebGLRenderingContextBase.prototype.generateMipmap = function (target)
{
	this.gl.glGenerateMipmap(target);
}

// WebGLActiveInfo? getActiveAttrib(WebGLProgram? program, GLuint index);
WebGLRenderingContextBase.prototype.getActiveAttrib = function (program, index)
{
	var bufsize = new Int32Array([ 0 ]);
	this.gl.glGetProgramiv(program && program.gl_program, this.gl.GL_ACTIVE_ATTRIBUTE_MAX_LENGTH, bufsize);
	var length = new Int32Array([ 0 ]);
	var size = new Int32Array([ 0 ]);
	var type = new Uint32Array([ 0 ]);
	var name = [ null ];
	this.gl.glGetActiveAttrib(program && program.gl_program, index, bufsize[0], length, size, type, name);
	return new WebGLActiveInfo(size[0], type[0], name[0]);
}

// WebGLActiveInfo? getActiveUniform(WebGLProgram? program, GLuint index);
WebGLRenderingContextBase.prototype.getActiveUniform = function (program, index)
{
	var bufsize = new Int32Array([ 0 ]);
	this.gl.glGetProgramiv(program && program.gl_program, this.gl.GL_ACTIVE_UNIFORM_MAX_LENGTH, bufsize);
	var length = new Int32Array([ 0 ]);
	var size = new Int32Array([ 0 ]);
	var type = new Uint32Array([ 0 ]);
	var name = [ null ];
	this.gl.glGetActiveUniform(program && program.gl_program, index, bufsize[0], length, size, type, name);
	return new WebGLActiveInfo(size[0], type[0], name[0]);
}

// sequence<WebGLShader>? getAttachedShaders(WebGLProgram? program);
WebGLRenderingContextBase.prototype.getAttachedShaders = function (program)
{
	var maxcount = new Int32Array([ 0 ]);
	this.gl.glGetProgramiv(program && program.gl_program, this.gl.GL_ATTACHED_SHADERS, maxcount);
	var count = new Int32Array([ 0 ]);
	var shaders = new Uint32Array(maxcount[0]);
	this.gl.glGetAttachedShaders(program && program.gl_program, maxcount[0], count, shaders);
	var ret = []; for (var i = 0; i < shaders.length; ++i)
	{
		ret.push(new WebGLShader(shaders[i]));
	}
	return ret;
//  var maxcount = 0;
//  var count = [ 0 ];
//  var shaders = [];
//  this.gl.glGetAttachedShaders(program && program.gl_program, maxcount, count, shaders);
//  return shaders;
}

// [WebGLHandlesContextLoss] GLint getAttribLocation(WebGLProgram? program, DOMString name);
WebGLRenderingContextBase.prototype.getAttribLocation = function (program, name)
{
	return this.gl.glGetAttribLocation(program && program.gl_program, name);
}

// any getBufferParameter(GLenum target, GLenum pname);
WebGLRenderingContextBase.prototype.getBufferParameter = function (target, pname)
{
	var gl = this.gl;

	function _getBufferParameter_i (n)
	{
		if (n > 1)
		{
			var params = new Int32Array(n);
			gl.glGetBufferParameteriv(target, pname, params);
			return params;
		}
		else
		{
			var param = WebGLRenderingContextBase.prototype.getBufferParameter.s_param_i;
			gl.glGetBufferParameteriv(target, pname, param);
			return param[0];
		}
	}

	var ret = null;
	switch (pname)
	{
	case this.BUFFER_SIZE:	ret = _getBufferParameter_i();	break;	// GLint
	case this.BUFFER_USAGE:	ret = _getBufferParameter_i();	break;	// GLenum
	default: break;
	}
	return ret;
}
WebGLRenderingContextBase.prototype.getBufferParameter.s_param_i = new Int32Array(1);

// [WebGLHandlesContextLoss] GLenum getError();
WebGLRenderingContextBase.prototype.getError = function ()
{
	return this.gl.glGetError();
}

// any getFramebufferAttachmentParameter(GLenum target, GLenum attachment, GLenum pname);
WebGLRenderingContextBase.prototype.getFramebufferAttachmentParameter = function (target, attachment, pname)
{
	var gl = this.gl;

	function _getFramebufferAttachmentParameter_i (n)
	{
		if (n > 1)
		{
			var params = new Int32Array(n);
			gl.glGetFramebufferAttachmentParameteriv(target, attachment, pname, params);
			return params;
		}
		else
		{
			var param = WebGLRenderingContextBase.prototype.getFramebufferAttachmentParameter.s_param_i;
			gl.glGetFramebufferAttachmentParameteriv(target, attachment, pname, param);
			return param[0]
		}
	}

	var ret = null;
	switch (pname)
	{
	case this.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE:			ret = _getFramebufferAttachmentParameter_i();	break;	// GLenum
	case this.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME:			ret = _getFramebufferAttachmentParameter_i();	break;	// WebGLRenderbuffer or WebGLTexture
	case this.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL:			ret = _getFramebufferAttachmentParameter_i();	break;	// GLint
	case this.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE:	ret = _getFramebufferAttachmentParameter_i();	break;	// GLint
	default: break;
	}
	return ret;
}
WebGLRenderingContextBase.prototype.getFramebufferAttachmentParameter.s_param_i = new Int32Array(1);

// any getParameter(GLenum pname);
WebGLRenderingContextBase.prototype.getParameter = function (pname)
{
	var gl = this.gl;

	function _getParameter_b (n)
	{
		if (n > 1)
		{
			var params = new Uint8Array(n); // TODO: static (max)
			gl.glGetBooleanv(pname, params);
			var ret = [];
			for (var i = 0; i < params.length; ++i)
			{
				ret.push(params[i] !== 0);
			}
			return ret;
		}
		else
		{
			var param = WebGLRenderingContextBase.prototype.getParameter.s_param_b;
			this.gl.glGetBooleanv(pname, param);
			return param[0] !== 0;
		}
	}

	function _getParameter_i (n)
	{
		if (n > 1)
		{
			var params = new Int32Array(n);
			gl.glGetIntegerv(pname, params);
			return params;
		}
		else
		{
			var param = WebGLRenderingContextBase.prototype.getParameter.s_param_i;
			gl.glGetIntegerv(pname, param);
			return param[0];
		}
	}

	function _getParameter_f (n)
	{
		if (n > 1)
		{
			var params = new Float32Array(n);
			gl.glGetFloatv(pname, params);
			return params;
		}
		else
		{
			var param = WebGLRenderingContextBase.prototype.getParameter.s_param_f;
			gl.glGetFloatv(pname, param);
			return param[0];
		}
	}

	function _getParameter_s ()
	{
		return gl.glGetString(pname);
	}

	var ret = null;
	switch (pname)
	{
	// WebGL specific
	case this.UNPACK_COLORSPACE_CONVERSION_WEBGL:	// GLenum
	case this.UNPACK_FLIP_Y_WEBGL:					// GLboolean
	case this.UNPACK_PREMULTIPLY_ALPHA_WEBGL:		// GLboolean
		ret = this.params[pname]; // TODO: error check
		break;
	case this.ACTIVE_TEXTURE:						ret = _getParameter_i();  	break;	// GLenum
	case this.ALIASED_LINE_WIDTH_RANGE:				ret = _getParameter_f(2);	break;	// Float32Array (with 2 elements)
	case this.ALIASED_POINT_SIZE_RANGE:				ret = _getParameter_f(2);	break;	// Float32Array (with 2 elements)
	case this.ALPHA_BITS:							ret = _getParameter_i();  	break;	// GLint
	case this.ARRAY_BUFFER_BINDING:					ret = _getParameter_i();  	break;	// WebGLBuffer
	case this.BLEND:								ret = _getParameter_b();  	break;	// GLboolean
	case this.BLEND_COLOR:							ret = _getParameter_f(4);	break;	// Float32Array (with 4 values)
	case this.BLEND_DST_ALPHA:						ret = _getParameter_i();  	break;	// GLenum
	case this.BLEND_DST_RGB:						ret = _getParameter_i();  	break;	// GLenum
	case this.BLEND_EQUATION_ALPHA:					ret = _getParameter_i();  	break;	// GLenum
	case this.BLEND_EQUATION_RGB:					ret = _getParameter_i();  	break;	// GLenum
	case this.BLEND_SRC_ALPHA:						ret = _getParameter_i();  	break;	// GLenum
	case this.BLEND_SRC_RGB:						ret = _getParameter_i();  	break;	// GLenum
	case this.BLUE_BITS:							ret = _getParameter_i();  	break;	// GLint
	case this.COLOR_CLEAR_VALUE:					ret = _getParameter_f(4);	break;	// Float32Array (with 4 values)
	case this.COLOR_WRITEMASK:						ret = _getParameter_b(4);	break;	// sequence<GLboolean> (with 4 values)
	case this.COMPRESSED_TEXTURE_FORMATS: // Uint32Array
		var num = new Int32Array([ 0 ]);
		this.gl.glGetIntegerv(this.gl.GL_NUM_COMPRESSED_TEXTURE_FORMATS, num);
		var params = new Int32Array(num[0]);
		this.gl.glGetIntegerv(pname, params);
		ret = params;
		break;
	case this.CULL_FACE:							ret = _getParameter_b();  	break;	// GLboolean
	case this.CULL_FACE_MODE:						ret = _getParameter_i();  	break;	// GLenum
	case this.CURRENT_PROGRAM:						ret = _getParameter_i();  	break;	// WebGLProgram
	case this.DEPTH_BITS:							ret = _getParameter_i();  	break;	// GLint
	case this.DEPTH_CLEAR_VALUE:					ret = _getParameter_f();  	break;	// GLfloat
	case this.DEPTH_FUNC:							ret = _getParameter_i();  	break;	// GLenum
	case this.DEPTH_RANGE:							ret = _getParameter_f(2);	break;	// Float32Array (with 2 elements)
	case this.DEPTH_TEST:							ret = _getParameter_b();  	break;	// GLboolean
	case this.DEPTH_WRITEMASK:						ret = _getParameter_b();  	break;	// GLboolean
	case this.DITHER:								ret = _getParameter_b();  	break;	// GLboolean
	case this.ELEMENT_ARRAY_BUFFER_BINDING:			ret = _getParameter_i();  	break;	// WebGLBuffer
	case this.FRAMEBUFFER_BINDING:					ret = _getParameter_i();  	break;	// WebGLFramebuffer
	case this.FRONT_FACE:							ret = _getParameter_i();  	break;	// GLenum
	case this.GENERATE_MIPMAP_HINT:					ret = _getParameter_i();  	break;	// GLenum
	case this.GREEN_BITS:							ret = _getParameter_i();  	break;	// GLint
	case this.IMPLEMENTATION_COLOR_READ_TYPE:		ret = _getParameter_i();	break;	// GLenum
	case this.IMPLEMENTATION_COLOR_READ_FORMAT:		ret = _getParameter_i();	break;	// GLenum
	case this.LINE_WIDTH:							ret = _getParameter_f();	break;	// GLfloat
	case this.MAX_COMBINED_TEXTURE_IMAGE_UNITS:		ret = _getParameter_i();  	break;	// GLint
	case this.MAX_CUBE_MAP_TEXTURE_SIZE:			ret = _getParameter_i();  	break;	// GLint
	case this.MAX_FRAGMENT_UNIFORM_VECTORS:			ret = _getParameter_i();	break;	// GLint
	case this.MAX_RENDERBUFFER_SIZE:				ret = _getParameter_i();  	break;	// GLint
	case this.MAX_TEXTURE_IMAGE_UNITS:				ret = _getParameter_i();  	break;	// GLint
	case this.MAX_TEXTURE_SIZE:						ret = _getParameter_i();  	break;	// GLint
	case this.MAX_VARYING_VECTORS:					ret = _getParameter_i();	break;	// GLint
	case this.MAX_VERTEX_ATTRIBS:					ret = _getParameter_i();  	break;	// GLint
	case this.MAX_VERTEX_TEXTURE_IMAGE_UNITS:		ret = _getParameter_i();  	break;	// GLint
	case this.MAX_VERTEX_UNIFORM_VECTORS:			ret = _getParameter_i();	break;	// GLint
	case this.MAX_VIEWPORT_DIMS:					ret = _getParameter_i(2);	break;	// Int32Array (with 2 elements)
	case this.PACK_ALIGNMENT:						ret = _getParameter_i();  	break;	// GLint
	case this.POLYGON_OFFSET_FACTOR:				ret = _getParameter_f();  	break;	// GLfloat
	case this.POLYGON_OFFSET_FILL:					ret = _getParameter_b();  	break;	// GLboolean
	case this.POLYGON_OFFSET_UNITS:					ret = _getParameter_f();  	break;	// GLfloat
	case this.RED_BITS:								ret = _getParameter_i();  	break;	// GLint
	case this.RENDERBUFFER_BINDING:					ret = _getParameter_i();  	break;	// WebGLRenderbuffer
	case this.RENDERER:								ret = _getParameter_s();  	break;	// DOMString
	case this.SAMPLE_BUFFERS:						ret = _getParameter_i();  	break;	// GLint
	case this.SAMPLE_COVERAGE_INVERT:				ret = _getParameter_b();  	break;	// GLboolean
	case this.SAMPLE_COVERAGE_VALUE:				ret = _getParameter_f();  	break;	// GLfloat
	case this.SAMPLES:								ret = _getParameter_i();  	break;	// GLint
	case this.SCISSOR_BOX:							ret = _getParameter_i(4);	break;	// Int32Array (with 4 elements)
	case this.SCISSOR_TEST:							ret = _getParameter_b();  	break;	// GLboolean
	case this.SHADING_LANGUAGE_VERSION:				ret = "OpenGL ES GLSL ES " + _getParameter_s(); break; // DOMString
	case this.STENCIL_BACK_FAIL:					ret = _getParameter_i();  	break;	// GLenum
	case this.STENCIL_BACK_FUNC:					ret = _getParameter_i();  	break;	// GLenum
	case this.STENCIL_BACK_PASS_DEPTH_FAIL:			ret = _getParameter_i();  	break;	// GLenum
	case this.STENCIL_BACK_PASS_DEPTH_PASS:			ret = _getParameter_i();  	break;	// GLenum
	case this.STENCIL_BACK_REF:						ret = _getParameter_i();  	break;	// GLint
	case this.STENCIL_BACK_VALUE_MASK:				ret = _getParameter_i();  	break;	// GLuint
	case this.STENCIL_BACK_WRITEMASK:				ret = _getParameter_i();  	break;	// GLuint
	case this.STENCIL_BITS:							ret = _getParameter_i();  	break;	// GLint
	case this.STENCIL_CLEAR_VALUE:					ret = _getParameter_i();  	break;	// GLint
	case this.STENCIL_FAIL:							ret = _getParameter_i();  	break;	// GLenum
	case this.STENCIL_FUNC:							ret = _getParameter_i();  	break;	// GLenum
	case this.STENCIL_PASS_DEPTH_FAIL:				ret = _getParameter_i();  	break;	// GLenum
	case this.STENCIL_PASS_DEPTH_PASS:				ret = _getParameter_i();  	break;	// GLenum
	case this.STENCIL_REF:							ret = _getParameter_i();  	break;	// GLint
	case this.STENCIL_TEST:							ret = _getParameter_b();  	break;	// GLboolean
	case this.STENCIL_VALUE_MASK:					ret = _getParameter_i();  	break;	// GLuint
	case this.STENCIL_WRITEMASK:					ret = _getParameter_i();  	break;	// GLuint
	case this.SUBPIXEL_BITS:						ret = _getParameter_i();  	break;	// GLint
	case this.TEXTURE_BINDING_2D:					ret = _getParameter_i();  	break;	// WebGLTexture
	case this.TEXTURE_BINDING_CUBE_MAP:				ret = _getParameter_i();  	break;	// WebGLTexture
	case this.UNPACK_ALIGNMENT:						ret = _getParameter_i();  	break;	// GLint
	case this.VENDOR:								ret = _getParameter_s();  	break;	// DOMString
	case this.VERSION:								ret = _getParameter_s();  	break;	// DOMString
	case this.VIEWPORT:								ret = _getParameter_i(4);	break;	// Int32Array (with 4 elements)

	case EXT_texture_filter_anisotropic.prototype.MAX_TEXTURE_MAX_ANISOTROPY_EXT: ret = _getParameter_f(); break; // GLfloat

	default: break;
	}
	return ret;
}
WebGLRenderingContextBase.prototype.getParameter.s_param_b = new Uint8Array(1);
WebGLRenderingContextBase.prototype.getParameter.s_param_i = new Int32Array(1);
WebGLRenderingContextBase.prototype.getParameter.s_param_f = new Float32Array(1);

// DOMString? getProgramInfoLog(WebGLProgram? program);
WebGLRenderingContextBase.prototype.getProgramInfoLog = function (program)
{
	var bufsize = new Int32Array([ 0 ]);
	this.gl.glGetProgramiv(program && program.gl_program, this.gl.GL_INFO_LOG_LENGTH, bufsize);
	var length = new Uint32Array([ 0 ]);
	var infolog = [ null ];
	this.gl.glGetProgramInfoLog(program && program.gl_program, bufsize[0], length, infolog);
	return infolog[0];
}

// any getProgramParameter(WebGLProgram? program, GLenum pname);
WebGLRenderingContextBase.prototype.getProgramParameter = function (program, pname)
{
	var gl = this.gl;

	function _getProgramParameter_b (n)
	{
		if (n > 1)
		{
			var params = new Int32Array(n); // TODO: static (max)
			gl.glGetProgramiv(program && program.gl_program, pname, params);
			var ret = [];
			for (var i = 0; i < params.length; ++i)
			{
				ret.push(params[i] !== 0);
			}
			return ret;
		}
		else
		{
			var param = WebGLRenderingContextBase.prototype.getProgramParameter.s_param_i;
			gl.glGetProgramiv(program && program.gl_program, pname, param);
			return param[0] !== 0;
		}
	}

	function _getProgramParameter_i (n)
	{
		if (n > 1)
		{
			var params = new Int32Array(n);
			gl.glGetProgramiv(program && program.gl_program, pname, params);
			return params;
		}
		else
		{
			var param = WebGLRenderingContextBase.prototype.getProgramParameter.s_param_i;
			gl.glGetProgramiv(program && program.gl_program, pname, param);
			return param[0];
		}
	}

	var ret = null;
	switch (pname)
	{
	case this.DELETE_STATUS:		ret = _getProgramParameter_b();	break;	// GLboolean
	case this.LINK_STATUS:			ret = _getProgramParameter_b();	break;	// GLboolean
	case this.VALIDATE_STATUS:		ret = _getProgramParameter_b();	break;	// GLboolean
	case this.ATTACHED_SHADERS:		ret = _getProgramParameter_i();	break;	// GLint
	case this.ACTIVE_ATTRIBUTES:	ret = _getProgramParameter_i();	break;	// GLint
	case this.ACTIVE_UNIFORMS:		ret = _getProgramParameter_i();	break;	// GLint
	default: break;
	}
	return ret;
}
WebGLRenderingContextBase.prototype.getProgramParameter.s_param_i = new Int32Array(1);

// any getRenderbufferParameter(GLenum target, GLenum pname);
WebGLRenderingContextBase.prototype.getRenderbufferParameter = function (target, pname)
{
	var gl = this.gl;

	function _getRenderbufferParameter_i (n)
	{
		if (n > 1)
		{
			var params = new Int32Array(n);
			gl.glGetRenderbufferParameteriv(target, pname, params);
			return params;
		}
		else
		{
			var param = WebGLRenderingContextBase.prototype.getRenderbufferParameter.s_param_i;
			gl.glGetRenderbufferParameteriv(target, pname, param);
			return param[0];
		}
	}

	var ret = null;
	switch (pname)
	{
	case this.RENDERBUFFER_WIDTH:				ret = _getRenderbufferParameter_i();	break;	// GLint
	case this.RENDERBUFFER_HEIGHT:				ret = _getRenderbufferParameter_i();	break;	// GLint
	case this.RENDERBUFFER_INTERNAL_FORMAT:		ret = _getRenderbufferParameter_i();	break;	// GLenum
	case this.RENDERBUFFER_RED_SIZE:			ret = _getRenderbufferParameter_i();	break;	// GLint
	case this.RENDERBUFFER_GREEN_SIZE:			ret = _getRenderbufferParameter_i();	break;	// GLint
	case this.RENDERBUFFER_BLUE_SIZE:			ret = _getRenderbufferParameter_i();	break;	// GLint
	case this.RENDERBUFFER_ALPHA_SIZE:			ret = _getRenderbufferParameter_i();	break;	// GLint
	case this.RENDERBUFFER_DEPTH_SIZE:			ret = _getRenderbufferParameter_i();	break;	// GLint
	case this.RENDERBUFFER_STENCIL_SIZE:		ret = _getRenderbufferParameter_i();	break;	// GLint
	default: break;
	}
	return ret;
}
WebGLRenderingContextBase.prototype.getRenderbufferParameter.s_param_i = new Int32Array(1);

// DOMString? getShaderInfoLog(WebGLShader? shader);
WebGLRenderingContextBase.prototype.getShaderInfoLog = function (shader)
{
	var bufsize = new Int32Array([ 0 ]); // TODO: static
	this.gl.glGetShaderiv(shader && shader.gl_shader, this.gl.GL_INFO_LOG_LENGTH, bufsize);
	var length = new Uint32Array([ 0 ]); // TODO: static
	var infolog = [ null ];
	this.gl.glGetShaderInfoLog(shader && shader.gl_shader, bufsize[0], length, infolog);
	return infolog[0];
}

// any getShaderParameter(WebGLShader? shader, GLenum pname);
WebGLRenderingContextBase.prototype.getShaderParameter = function (shader, pname)
{
	var gl = this.gl;

	function _getShaderParameter_b (n)
	{
		if (n > 1)
		{
			var params = new Int32Array(n); // TODO: static (max)
			gl.glGetShaderiv(shader && shader.gl_shader, pname, params);
			var ret = [];
			for (var i = 0; i < params.length; ++i)
			{
				ret.push(params[i] !== 0);
			}
			return ret;
		}
		else
		{
			var param = WebGLRenderingContextBase.prototype.getShaderParameter.s_param_i;
			gl.glGetShaderiv(shader && shader.gl_shader, pname, param);
			return param[0] !== 0;
		}
	}

	function _getShaderParameter_i (n)
	{
		if (n > 1)
		{
			var params = new Int32Array(n);
			gl.glGetShaderiv(shader && shader.gl_shader, pname, params);
			return params;
		}
		else
		{
			var param = WebGLRenderingContextBase.prototype.getShaderParameter.s_param_i;
			gl.glGetShaderiv(shader && shader.gl_shader, pname, param);
			return param[0];
		}
	}

	var ret = null;
	switch (pname)
	{
	case this.SHADER_TYPE:		ret = _getShaderParameter_i();	break;	// GLenum
	case this.DELETE_STATUS:	ret = _getShaderParameter_b();	break;	// GLboolean
	case this.COMPILE_STATUS:	ret = _getShaderParameter_b();	break;	// GLboolean
	default: break;
	}
	return ret;
}
WebGLRenderingContextBase.prototype.getShaderParameter.s_param_i = new Int32Array(1);

// WebGLShaderPrecisionFormat? getShaderPrecisionFormat(GLenum shadertype, GLenum precisiontype);
WebGLRenderingContextBase.prototype.getShaderPrecisionFormat = function (shadertype, precisiontype)
{
	var range = [ 0, 0 ];
	var precision = [ 0 ];

	// This function is sometimes defined even though it's really just
	// a stub, so we need to set range and precision as if it weren't
	// defined before calling it.
	switch (precisiontype)
	{
	case this.LOW_INT:
	case this.MEDIUM_INT:
	case this.HIGH_INT:
		// These values are for a 32-bit twos-complement integer format.
		range[0] = 31;
		range[1] = 30;
		precision[0] = 0;
		break;
	case this.LOW_FLOAT:
	case this.MEDIUM_FLOAT:
	case this.HIGH_FLOAT:
		// These values are for an IEEE single-precision floating-point format.
		range[0] = 127;
		range[1] = 127;
		precision[0] = 23;
		break;
	}

	//console.log(shadertype, precisiontype, range[0], range[1], precision[0]);

	//if (this._getParameter_b(this.gl.GL_SHADER_COMPILER))
	//{
		this.gl.glGetShaderPrecisionFormat(shadertype, precisiontype, range, precision);
	//}

	//console.log(shadertype, precisiontype, range[0], range[1], precision[0]);

	switch (precisiontype)
	{
	case this.LOW_INT:
	case this.MEDIUM_INT:
	case this.HIGH_INT:
		// These values are for a 32-bit twos-complement integer format.
		range[0] = range[0] || 31;
		range[1] = range[1] || 30;
		precision[0] = precision[0] || 0;
		break;
	case this.LOW_FLOAT:
	case this.MEDIUM_FLOAT:
	case this.HIGH_FLOAT:
		// These values are for an IEEE single-precision floating-point format.
		range[0] = range[0] || 127;
		range[1] = range[1] || 127;
		precision[0] = precision[0] || 23;
		break;
	}

	return new WebGLShaderPrecisionFormat(range[0], range[1], precision[0]);
}

// DOMString? getShaderSource(WebGLShader? shader);
WebGLRenderingContextBase.prototype.getShaderSource = function (shader)
{
	var bufsize = new Int32Array([ 0 ]);
	this.gl.glGetShaderiv(shader && shader.gl_shader, this.gl.GL_SHADER_SOURCE_LENGTH, bufsize);
	var length = new Uint32Array([ 0 ]);
	var source = [ null ];
	this.gl.glGetShaderSource(shader && shader.gl_shader, bufsize[0], length, source);
	return source[0];
}

// any getTexParameter(GLenum target, GLenum pname);
WebGLRenderingContextBase.prototype.getTexParameter = function (target, pname)
{
	var gl = this.gl;

	function _getTexParameter_i (n)
	{
		if (n > 1)
		{
			var params = new Int32Array(n);
			this.gl.glGetTexParameteriv(target, pname, params);
			return params;
		}
		else
		{
			var param = WebGLRenderingContextBase.prototype.getTexParameter.s_param_i;
			this.gl.glGetTexParameteriv(target, pname, param);
			return param[0];
		}
	}

	function _getTexParameter_f (n)
	{
		if (n > 1)
		{
			var params = new Float32Array(n);
			gl.glGetTexParameterfv(target, pname, params);
			return params;
		}
		else
		{
			var param = WebGLRenderingContextBase.prototype.getTexParameter.s_param_f;
			gl.glGetTexParameterfv(target, pname, param);
			return param[0];
		}
	}

	var ret = null;
	switch (pname)
	{
	case this.TEXTURE_MAG_FILTER:	ret = _getTexParameter_i();	break;	// GLenum
	case this.TEXTURE_MIN_FILTER:	ret = _getTexParameter_i();	break;	// GLenum
	case this.TEXTURE_WRAP_S:		ret = _getTexParameter_i();	break;	// GLenum
	case this.TEXTURE_WRAP_T:		ret = _getTexParameter_i();	break;	// GLenum

	case EXT_texture_filter_anisotropic.prototype.TEXTURE_MAX_ANISOTROPY_EXT: ret = _getTexParameter_i(); break; // GLenum

	default: break;
	}
	return ret;
}
WebGLRenderingContextBase.prototype.getTexParameter.s_param_i = new Int32Array(1);
WebGLRenderingContextBase.prototype.getTexParameter.s_param_f = new Float32Array(1);

// any getUniform(WebGLProgram? program, WebGLUniformLocation? location);
WebGLRenderingContextBase.prototype.getUniform = function (program, location)
{
	var gl = this.gl;

	function _getUniform_b (n)
	{
		if (n > 1)
		{
			var params = new Int32Array(n); // TODO: static (max)
			gl.glGetUniformiv(program && program.gl_program, location && location.gl_location, params);
			var ret = [];
			for (var i = 0; i < params.length; ++i)
			{
				ret.push(params[i] !== 0);
			}
			return ret;
		}
		else
		{
			var param = WebGLRenderingContextBase.prototype.getUniform.s_param_i;
			gl.glGetUniformiv(program && program.gl_program, location && location.gl_location, param);
			return param[0] !== 0;
		}
	}

	function _getUniform_i (n)
	{
		if (n > 1)
		{
			var params =new Int32Array(n);
			gl.glGetUniformiv(program && program.gl_program, location && location.gl_location, params);
			return params;
		}
		else
		{
			var param = WebGLRenderingContextBase.prototype.getUniform.s_param_i;
			gl.glGetUniformiv(program && program.gl_program, location && location.gl_location, param);
			return param[0];
		}
	}

	function _getUniform_f (n)
	{
		if (n > 1)
		{
			var params = new Float32Array(n);
			gl.glGetUniformfv(program && program.gl_program, location && location.gl_location, params);
			return (n > 1)?(params):(params[0]);
		}
		else
		{
			var param = WebGLRenderingContextBase.prototype.getUniform.s_param_f;
			gl.glGetUniformfv(program && program.gl_program, location && location.gl_location, param);
			return param[0];
		}
	}

	var length = [ 0 ];
	var size = [ 0 ];
	var type = [ 0 ];
	var name = [ null ];
	gl.glGetActiveUniform(program && program.gl_program, location && location.gl_location, 0, length, size, type, name);
	var ret = null;
	switch (type[0])
	{
	case this.FLOAT:			ret = _getUniform_f();		break;	// GLfloat
	case this.FLOAT_VEC2:		ret = _getUniform_f(2);		break;	// Float32Array (with 2 elements)
	case this.FLOAT_VEC3:		ret = _getUniform_f(3);		break;	// Float32Array (with 3 elements)
	case this.FLOAT_VEC4:		ret = _getUniform_f(4);		break;	// Float32Array (with 4 elements)
	case this.INT:				ret = _getUniform_i();		break;	// GLint
	case this.INT_VEC2:			ret = _getUniform_i(2);		break;	// Int32Array (with 2 elements)
	case this.INT_VEC3:			ret = _getUniform_i(3);		break;	// Int32Array (with 3 elements)
	case this.INT_VEC4:			ret = _getUniform_i(4);		break;	// Int32Array (with 4 elements)
	case this.BOOL:				ret = _getUniform_b();		break;	// GLboolean
	case this.BOOL_VEC2:		ret = _getUniform_b(2);		break;	// sequence<GLboolean> (with 2 elements)
	case this.BOOL_VEC3:		ret = _getUniform_b(3);		break;	// sequence<GLboolean> (with 3 elements)
	case this.BOOL_VEC4:		ret = _getUniform_b(4);		break;	// sequence<GLboolean> (with 4 elements)
	case this.FLOAT_MAT2:		ret = _getUniform_f(4);		break;	// Float32Array (with 4 elements)
	case this.FLOAT_MAT3:		ret = _getUniform_f(9);		break;	// Float32Array (with 9 elements)
	case this.FLOAT_MAT4:		ret = _getUniform_f(16);	break;	// Float32Array (with 16 elements)
	case this.SAMPLER_2D:		ret = _getUniform_i();		break;	// GLint
	case this.SAMPLER_CUBE:		ret = _getUniform_i();		break;	// GLint
	default: break;
	}
	return ret;
}
WebGLRenderingContextBase.prototype.getUniform.s_param_i = new Int32Array(1);
WebGLRenderingContextBase.prototype.getUniform.s_param_f = new Float32Array(1);

// WebGLUniformLocation? getUniformLocation(WebGLProgram? program, DOMString name);
WebGLRenderingContextBase.prototype.getUniformLocation = function (program, name)
{
	var ret = this.gl.glGetUniformLocation(program && program.gl_program, name);
	if (ret >= 0)
	{
		return new WebGLUniformLocation(ret);
	}
	return null;
}

// any getVertexAttrib(GLuint index, GLenum pname);
WebGLRenderingContextBase.prototype.getVertexAttrib = function (index, pname)
{
	var gl = this.gl;

	function _getVertexAttrib_b (n)
	{
		if (n > 1)
		{
			var params = new Int32Array(n); // TODO: static (max)
			gl.glGetVertexAttribiv(index, pname, params);
			var ret = [];
			for (var i = 0; i < params.length; ++i)
			{
				ret.push(params[i] !== 0);
			}
			return ret;
		}
		else
		{
			var param = WebGLRenderingContextBase.prototype.getVertexAttrib.s_param_i;
			gl.glGetVertexAttribiv(index, pname, param);
			return param[0] !== 0;
		}
	}

	function _getVertexAttrib_i (n)
	{
		if (n > 1)
		{
			var params = new Int32Array(n);
			gl.glGetVertexAttribiv(index, pname, params);
			return params;
		}
		else
		{
			var param = WebGLRenderingContextBase.prototype.getVertexAttrib.s_param_i;
			gl.glGetVertexAttribiv(index, pname, param);
			return param[0];
		}
	}

	function _getVertexAttrib_f (n)
	{
		if (n > 1)
		{
			var params = new Float32Array(n);
			gl.glGetVertexAttribfv(index, pname, params);
			return params;
		}
		else
		{
			var param = WebGLRenderingContextBase.prototype.getVertexAttrib.s_param_f;
			gl.glGetVertexAttribfv(index, pname, param);
			return param[0];
		}
	}

	var ret = null;
	switch (pname)
	{
	case this.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING:	ret = _getVertexAttrib_i();		break;	// WebGLBuffer
	case this.VERTEX_ATTRIB_ARRAY_ENABLED:			ret = _getVertexAttrib_b();		break;	// GLboolean
	case this.VERTEX_ATTRIB_ARRAY_SIZE:				ret = _getVertexAttrib_i();		break;	// GLint
	case this.VERTEX_ATTRIB_ARRAY_STRIDE:			ret = _getVertexAttrib_i();		break;	// GLint
	case this.VERTEX_ATTRIB_ARRAY_TYPE:				ret = _getVertexAttrib_i();		break;	// GLenum
	case this.VERTEX_ATTRIB_ARRAY_NORMALIZED:		ret = _getVertexAttrib_b();		break;	// GLboolean
	case this.CURRENT_VERTEX_ATTRIB:				ret = _getVertexAttrib_f(4);	break;	// Float32Array (with 4 elements)
	default: break;
	}
	return ret;
}
WebGLRenderingContextBase.prototype.getVertexAttrib.s_param_i = new Int32Array(1);
WebGLRenderingContextBase.prototype.getVertexAttrib.s_param_f = new Float32Array(1);

// [WebGLHandlesContextLoss] GLsizeiptr getVertexAttribOffset(GLuint index, GLenum pname);
WebGLRenderingContextBase.prototype.getVertexAttribOffset = function (index, pname)
{
	var pointer = [ 0 ];
	this.gl.glGetVertexAttribPointerv(index, pname, pointer);
	return pointer[0];
}

// void hint(GLenum target, GLenum mode);
WebGLRenderingContextBase.prototype.hint = function (target, mode)
{
	this.gl.glHint(target, mode);
}

// [WebGLHandlesContextLoss] GLboolean isBuffer(WebGLBuffer? buffer);
WebGLRenderingContextBase.prototype.isBuffer = function (buffer)
{
	this.gl.glIsBuffer(buffer && buffer.gl_buffer);
}

// [WebGLHandlesContextLoss] GLboolean isEnabled(GLenum cap);
WebGLRenderingContextBase.prototype.isEnabled = function (cap)
{
	this.gl.glIsEnabled(cap);
}

// [WebGLHandlesContextLoss] GLboolean isFramebuffer(WebGLFramebuffer? framebuffer);
WebGLRenderingContextBase.prototype.isFramebuffer = function (framebuffer)
{
	this.gl.glIsFramebuffer(framebuffer && framebuffer.gl_framebuffer);
}

// [WebGLHandlesContextLoss] GLboolean isProgram(WebGLProgram? program);
WebGLRenderingContextBase.prototype.isProgram = function (program)
{
	this.gl.glIsProgram(program && program.gl_program);
}

// [WebGLHandlesContextLoss] GLboolean isRenderbuffer(WebGLRenderbuffer? renderbuffer);
WebGLRenderingContextBase.prototype.isRenderbuffer = function (renderbuffer)
{
	this.gl.glIsRenderbuffer(renderbuffer && renderbuffer.gl_renderbuffer);
}

// [WebGLHandlesContextLoss] GLboolean isShader(WebGLShader? shader);
WebGLRenderingContextBase.prototype.isShader = function (shader)
{
	this.gl.glIsShader(shader && shader.gl_shader);
}

// [WebGLHandlesContextLoss] GLboolean isTexture(WebGLTexture? texture);
WebGLRenderingContextBase.prototype.isTexture = function (texture)
{
	this.gl.glIsTexture(texture && texture.gl_texture);
}

// void lineWidth(GLfloat width);
WebGLRenderingContextBase.prototype.lineWidth = function (width)
{
	this.gl.glLineWidth(width);
}

// void linkProgram(WebGLProgram? program);
WebGLRenderingContextBase.prototype.linkProgram = function (program)
{
	this.gl.glLinkProgram(program && program.gl_program);
}

// void pixelStorei(GLenum pname, GLint param);
WebGLRenderingContextBase.prototype.pixelStorei = function (pname, param)
{
	switch (pname)
	{
	// WebGL specific
	case this.UNPACK_FLIP_Y_WEBGL:
	case this.UNPACK_PREMULTIPLY_ALPHA_WEBGL:
	case this.UNPACK_COLORSPACE_CONVERSION_WEBGL:
		this.params[pname] = param; // TODO: error check
		break;
	default:
		this.gl.glPixelStorei(pname, param);
		break;
	}
}

// void polygonOffset(GLfloat factor, GLfloat units);
WebGLRenderingContextBase.prototype.polygonOffset = function (factor, units)
{
	this.gl.glPolygonOffset(factor, units);
}

// void readPixels(GLint x, GLint y, GLsizei width, GLsizei height, GLenum format, GLenum type, ArrayBufferView? pixels);
WebGLRenderingContextBase.prototype.readPixels = function (x, y, width, height, format, type, pixels)
{
	this.gl.glReadPixels(x, y, width, height, format, type, pixels);
}

// void renderbufferStorage(GLenum target, GLenum internalformat, GLsizei width, GLsizei height);
WebGLRenderingContextBase.prototype.renderbufferStorage = function (target, internalformat, width, height)
{
	this.gl.glRenderbufferStorage(target, internalformat, width, height);
}

// void sampleCoverage(GLclampf value, GLboolean invert);
WebGLRenderingContextBase.prototype.sampleCoverage = function (value, invert)
{
	this.gl.glSampleCoverage(value, invert);
}

// void scissor(GLint x, GLint y, GLsizei width, GLsizei height);
WebGLRenderingContextBase.prototype.scissor = function (x, y, width, height)
{
	this.gl.glScissor(x, y, width, height);
}

// void shaderSource(WebGLShader? shader, DOMString source);
WebGLRenderingContextBase.prototype.shaderSource = function (shader, src)
{
	var gl_src = "";

	var glsl_version_str = this.gl.glGetString(this.gl.GL_SHADING_LANGUAGE_VERSION) || "0.0 <vendor-specific-information>";
	//console.log(glsl_version_str);
	var glsl_version = glsl_version_str.split(/(\d+)\.(\d+)( .*)?/);
	//console.log(glsl_version);
	var glsl_version_major = parseInt(glsl_version[1], 10) || 0;
	var glsl_version_minor = parseInt(glsl_version[2], 10) || 0;
	var glsl_version_number = (glsl_version_major * 100) + glsl_version_minor;
	//console.log(glsl_version_number);

	if (glsl_version_number > 0)
	{
		gl_src += [
			"#version " + glsl_version_number,
			"" // extra newline
		].join('\n');
	}

	if ((glsl_version_number >= 150) && (glsl_version_number < 200))
	{
		gl_src += [
			"", // extra newline
			"#extension GL_ARB_gpu_shader5 : enable",
			"" // extra newline
		].join('\n');
	}

	// add GL_ES shim
	gl_src += [
		"", // extra newline
		"#if !defined(GL_ES)",
		"#define highp",
		"#define mediump",
		"#define lowp",
		"#endif",
		"" // extra newline
	].join('\n');

	// add GL_ES conditional around precision statements
	gl_src += src.replace(/(\s*precision\s+.*;)/g,
	[
		"", // extra newline
		"#if defined(GL_ES)",
		"$1",
		"#endif",
		"" // extra newline
	].join('\n'));

	//console.log("gl_src", gl_src);

	//gl_src = src;

	this.gl.glShaderSource(shader && shader.gl_shader, 1, [ gl_src ], [ gl_src.length ]);
}

// void stencilFunc(GLenum func, GLint ref, GLuint mask);
WebGLRenderingContextBase.prototype.stencilFunc = function (func, ref, mask)
{
	this.gl.glStencilFunc(func, ref, mask);
}

// void stencilFuncSeparate(GLenum face, GLenum func, GLint ref, GLuint mask);
WebGLRenderingContextBase.prototype.stencilFuncSeparate = function (face, func, ref, mask)
{
	this.gl.glStencilFuncSeparate(face, func, ref, mask);
}

// void stencilMask(GLuint mask);
WebGLRenderingContextBase.prototype.stencilMask = function (mask)
{
	this.gl.glStencilMask(mask);
}

// void stencilMaskSeparate(GLenum face, GLuint mask);
WebGLRenderingContextBase.prototype.stencilMaskSeparate = function (face, mask)
{
	this.gl.glStencilMaskSeparate(face, mask);
}

// void stencilOp(GLenum fail, GLenum zfail, GLenum zpass);
WebGLRenderingContextBase.prototype.stencilOp = function (fail, zfail, zpass)
{
	this.gl.glStencilOp(fail, zfail, zpass);
}

// void stencilOpSeparate(GLenum face, GLenum fail, GLenum zfail, GLenum zpass);
WebGLRenderingContextBase.prototype.stencilOpSeparate = function (face, fail, zfail, zpass)
{
	this.gl.glStencilOpSeparate(face, fail, zfail, zpass);
}

// void texImage2D(GLenum target, GLint level, GLenum internalformat, GLsizei width, GLsizei height, GLint border, GLenum format, GLenum type, ArrayBufferView? pixels);
// void texImage2D(GLenum target, GLint level, GLenum internalformat, GLenum format, GLenum type, ImageData? pixels);
// void texImage2D(GLenum target, GLint level, GLenum internalformat, GLenum format, GLenum type, HTMLImageElement image); // May throw DOMException
// void texImage2D(GLenum target, GLint level, GLenum internalformat, GLenum format, GLenum type, HTMLCanvasElement canvas); // May throw DOMException
// void texImage2D(GLenum target, GLint level, GLenum internalformat, GLenum format, GLenum type, HTMLVideoElement video); // May throw DOMException
WebGLRenderingContextBase.prototype.texImage2D = function ()
{
	var target = arguments[0];
	var level = arguments[1];
	var internalformat = arguments[2];
	var width = 0;
	var height = 0;
	var border = 0;
	var format = 0;
	var type = 0;
	/** @type {?ArrayBufferView} */ var pixels = null;

	switch (arguments.length)
	{
	case 6:
		format = arguments[3];
		type = arguments[4];
		var data = arguments[5];
		if ((typeof(data.width) !== 'undefined') &&
			(typeof(data.height) !== 'undefined'))
		{
			width = data.width;
			height = data.height;

			if (typeof(data.data) !== 'undefined')
			{
				// data is ImageData
				pixels = new Uint8Array(data.data.buffer);
			}
			else
			{
				// data is HTMLImageElement
				// data is HTMLCanvasElement
				// data is HTMLVideoElement
				try
				{
					var node_canvas = require('canvas');
					var canvas = new node_canvas(width, height);
					var ctx = canvas.getContext('2d');
					ctx.drawImage(data, 0, 0);
					var image_data = ctx.getImageData(0, 0, width, height);
					pixels = new Uint8Array(image_data.data.buffer);
				}
				catch (err)
				{
					console.error(err);
				}
			}
		}
		else
		{
			throw new Error();
		}
		break;
	case 8:
	case 9:
		width = arguments[3];
		height = arguments[4];
		border = arguments[5];
		format = arguments[6];
		type = arguments[7];
		pixels = (arguments.length > 8)?(arguments[8]):(null);
		break;
	default:
		throw new Error();
		break;
	}

	// UNPACK_FLIP_Y_WEBGL of type boolean
	// If set, then during any subsequent calls to texImage2D or texSubImage2D,
	// the source data is flipped along the vertical axis, so that conceptually
	// the last row is the first one transferred.
	// The initial value is false. Any non-zero value is interpreted as true.
	if (this.params[this.UNPACK_FLIP_Y_WEBGL])
	{
		if (pixels)
		{
			var pixels32 = new Uint32Array(pixels.buffer);
			for (var ylo = 0, yhi = height - 1; ylo < yhi; ++ylo, --yhi)
			{
				for (var x = 0, xct = width; x < xct; ++x)
				{
					var ilo = (ylo * width) + x;
					var ihi = (yhi * width) + x;
					var pixel = pixels32[ilo];
					pixels32[ilo] = pixels32[ihi];
					pixels32[ihi] = pixel;
				}
			}
		}
	}

	// UNPACK_PREMULTIPLY_ALPHA_WEBGL of type boolean
	// If set, then during any subsequent calls to texImage2D or texSubImage2D,
	// the alpha channel of the source data, if present, is multiplied into the
	// color channels during the data transfer.
	// The initial value is false. Any non-zero value is interpreted as true.
	if (this.params[this.UNPACK_PREMULTIPLY_ALPHA_WEBGL])
	{
		if (pixels)
		{
			for (var i = 0; i < pixels.length; i += 4)
			{
				var a = Math.max(0.0, Math.min(1.0, pixels[i+3] / 255.0)); // a
				pixels[i+0] *= a; // r
				pixels[i+1] *= a; // g
				pixels[i+2] *= a; // b
			}
		}
	}

	// UNPACK_COLORSPACE_CONVERSION_WEBGL of type unsigned long
	// If set to BROWSER_DEFAULT_WEBGL, then the browser's default colorspace
	// conversion is applied during subsequent texImage2D and texSubImage2D
	// calls taking HTMLImageElement. The precise conversions may be specific
	// to both the browser and file type. If set to NONE, no colorspace conversion
	// is applied.
	// The initial value is BROWSER_DEFAULT_WEBGL.
	switch (this.params[this.UNPACK_COLORSPACE_CONVERSION_WEBGL])
	{
	case this.NONE:
		// TODO
		break;
	case this.BROWSER_DEFAULT_WEBGL:
	default:
		// TODO
		break;
	}

	this.gl.glTexImage2D(target, level, internalformat, width, height, border, format, type, pixels);
}

// void texParameterf(GLenum target, GLenum pname, GLfloat param);
WebGLRenderingContextBase.prototype.texParameterf = function (target, pname, param)
{
	this.gl.glTexParameterf(target, pname, param);
}

// void texParameteri(GLenum target, GLenum pname, GLint param);
WebGLRenderingContextBase.prototype.texParameteri = function (target, pname, param)
{
	this.gl.glTexParameteri(target, pname, param);
}

// void texSubImage2D(GLenum target, GLint level, GLint xoffset, GLint yoffset, GLsizei width, GLsizei height, GLenum format, GLenum type, ArrayBufferView? pixels);
// void texSubImage2D(GLenum target, GLint level, GLint xoffset, GLint yoffset, GLenum format, GLenum type, ImageData? pixels);
// void texSubImage2D(GLenum target, GLint level, GLint xoffset, GLint yoffset, GLenum format, GLenum type, HTMLImageElement image); // May throw DOMException
// void texSubImage2D(GLenum target, GLint level, GLint xoffset, GLint yoffset, GLenum format, GLenum type, HTMLCanvasElement canvas); // May throw DOMException
// void texSubImage2D(GLenum target, GLint level, GLint xoffset, GLint yoffset, GLenum format, GLenum type, HTMLVideoElement video); // May throw DOMException
WebGLRenderingContextBase.prototype.texSubImage2D = function ()
{
	var target = arguments[0];
	var level = arguments[1];
	var xoffset = arguments[2];
	var yoffset = arguments[3];
	var width = 0;
	var height = 0;
	var format = 0;
	var type = 0;
	/** @type {?ArrayBufferView} */ var pixels = null;

	switch (arguments.length)
	{
	case 7:
		format = arguments[4];
		type = arguments[5];
		var data = arguments[6];
		if ((typeof(data.width) !== 'undefined') &&
			(typeof(data.height) !== 'undefined'))
		{
			width = data.width;
			height = data.height;

			if (typeof(data.data) !== 'undefined')
			{
				// data is ImageData
				pixels = new Uint8Array(data.data.buffer);
			}
			else
			{
				// data is HTMLImageElement
				// data is HTMLCanvasElement
				// data is HTMLVideoElement
				try
				{
					var node_canvas = require('canvas');
					var canvas = new node_canvas(width, height);
					var ctx = canvas.getContext('2d');
					ctx.drawImage(data, 0, 0);
					var image_data = ctx.getImageData(0, 0, width, height);
					pixels = new Uint8Array(image_data.data);
				}
				catch (err)
				{
					console.error(err);
				}
			}
		}
		else
		{
			throw new Error();
		}
		break;
	case 8:
	case 9:
		width = arguments[4];
		height = arguments[5];
		format = arguments[6];
		type = arguments[7];
		pixels = (arguments.length > 8)?(arguments[8]):(null);
		break;
	default:
		throw new Error();
		break;
	}

	this.gl.glTexSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixels);
}

// void uniform1f(WebGLUniformLocation? location, GLfloat x);
WebGLRenderingContextBase.prototype.uniform1f = function (location, x)
{
	this.gl.glUniform1f(location && location.gl_location, x);
}

// void uniform1fv(WebGLUniformLocation? location, Float32Array v);
// void uniform1fv(WebGLUniformLocation? location, sequence<GLfloat> v);
WebGLRenderingContextBase.prototype.uniform1fv = function (location, v)
{
	var count = v.length;
	if (v instanceof Float32Array)
	{
		this.gl.glUniform1fv(location && location.gl_location, count, v);
	}
	else if (v instanceof Array)
	{
		this.gl.glUniform1fv(location && location.gl_location, count, new Float32Array(v));
	}
}

// void uniform1i(WebGLUniformLocation? location, GLint x);
WebGLRenderingContextBase.prototype.uniform1i = function (location, x)
{
	this.gl.glUniform1i(location && location.gl_location, x);
}

// void uniform1iv(WebGLUniformLocation? location, Int32Array v);
// void uniform1iv(WebGLUniformLocation? location, sequence<long> v);
WebGLRenderingContextBase.prototype.uniform1iv = function (location, v)
{
	var count = v.length;
	if (v instanceof Int32Array)
	{
		this.gl.glUniform1iv(location && location.gl_location, count, v);
	}
	else if (v instanceof Array)
	{
		this.gl.glUniform1iv(location && location.gl_location, count, new Int32Array(v));
	}
}

// void uniform2f(WebGLUniformLocation? location, GLfloat x, GLfloat y);
WebGLRenderingContextBase.prototype.uniform2f = function (location, x, y)
{
	this.gl.glUniform2f(location && location.gl_location, x, y);
}

// void uniform2fv(WebGLUniformLocation? location, Float32Array v);
// void uniform2fv(WebGLUniformLocation? location, sequence<GLfloat> v);
WebGLRenderingContextBase.prototype.uniform2fv = function (location, v)
{
	//assert((value.length % 2) === 0);
	var count = v.length / 2;
	if (v instanceof Float32Array)
	{
		this.gl.glUniform2fv(location && location.gl_location, count, v);
	}
	else if (v instanceof Array)
	{
		this.gl.glUniform2fv(location && location.gl_location, count, new Float32Array(v));
	}
}

// void uniform2i(WebGLUniformLocation? location, GLint x, GLint y);
WebGLRenderingContextBase.prototype.uniform2i = function (location, x, y)
{
	this.gl.glUniform2i(location && location.gl_location, x, y);
}

// void uniform2iv(WebGLUniformLocation? location, Int32Array v);
// void uniform2iv(WebGLUniformLocation? location, sequence<long> v);
WebGLRenderingContextBase.prototype.uniform2iv = function (location, v)
{
	//assert((value.length % 2) === 0);
	var count = v.length / 2;
	if (v instanceof Int32Array)
	{
		this.gl.glUniform2iv(location && location.gl_location, count, v);
	}
	else if (v instanceof Array)
	{
		this.gl.glUniform2iv(location && location.gl_location, count, new Int32Array(v));
	}
}

// void uniform3f(WebGLUniformLocation? location, GLfloat x, GLfloat y, GLfloat z);
WebGLRenderingContextBase.prototype.uniform3f = function (location, x, y, z)
{
	this.gl.glUniform3f(location && location.gl_location, x, y, z);
}

// void uniform3fv(WebGLUniformLocation? location, Float32Array v);
// void uniform3fv(WebGLUniformLocation? location, sequence<GLfloat> v);
WebGLRenderingContextBase.prototype.uniform3fv = function (location, v)
{
	//assert((value.length % 3) === 0);
	var count = v.length / 3;
	if (v instanceof Float32Array)
	{
		this.gl.glUniform3fv(location && location.gl_location, count, v);
	}
	else if (v instanceof Array)
	{
		this.gl.glUniform3fv(location && location.gl_location, count, new Float32Array(v));
	}
}

// void uniform3i(WebGLUniformLocation? location, GLint x, GLint y, GLint z);
WebGLRenderingContextBase.prototype.uniform3i = function (location, x, y, z)
{
	this.gl.glUniform3i(location && location.gl_location, x, y, z);
}

// void uniform3iv(WebGLUniformLocation? location, Int32Array v);
// void uniform3iv(WebGLUniformLocation? location, sequence<long> v);
WebGLRenderingContextBase.prototype.uniform3iv = function (location, v)
{
	//assert((value.length % 3) === 0);
	var count = v.length / 3;
	if (v instanceof Int32Array)
	{
		this.gl.glUniform3iv(location && location.gl_location, count, v);
	}
	else if (v instanceof Array)
	{
		this.gl.glUniform3iv(location && location.gl_location, count, new Int32Array(v));
	}
}

// void uniform4f(WebGLUniformLocation? location, GLfloat x, GLfloat y, GLfloat z, GLfloat w);
WebGLRenderingContextBase.prototype.uniform4f = function (location, x, y, z, w)
{
	this.gl.glUniform4f(location && location.gl_location, x, y, z, w);
}

// void uniform4fv(WebGLUniformLocation? location, Float32Array v);
// void uniform4fv(WebGLUniformLocation? location, sequence<GLfloat> v);
WebGLRenderingContextBase.prototype.uniform4fv = function (location, v)
{
	//assert((value.length % 4) === 0);
	var count = v.length / 4;
	if (v instanceof Float32Array)
	{
		this.gl.glUniform4fv(location && location.gl_location, count, v);
	}
	else if (v instanceof Array)
	{
		this.gl.glUniform4fv(location && location.gl_location, count, new Float32Array(v));
	}
}

// void uniform4i(WebGLUniformLocation? location, GLint x, GLint y, GLint z, GLint w);
WebGLRenderingContextBase.prototype.uniform4i = function (location, x, y, z, w)
{
	this.gl.glUniform4i(location && location.gl_location, x, y, z, w);
}

// void uniform4iv(WebGLUniformLocation? location, Int32Array v);
// void uniform4iv(WebGLUniformLocation? location, sequence<long> v);
WebGLRenderingContextBase.prototype.uniform4iv = function (location, v)
{
	//assert((value.length % 4) === 0);
	var count = v.length / 4;
	if (v instanceof Int32Array)
	{
		this.gl.glUniform4iv(location && location.gl_location, count, v);
	}
	else if (v instanceof Array)
	{
		this.gl.glUniform4iv(location && location.gl_location, count, new Int32Array(v));
	}
}

// void uniformMatrix2fv(WebGLUniformLocation? location, GLboolean transpose, Float32Array value);
// void uniformMatrix2fv(WebGLUniformLocation? location, GLboolean transpose, sequence<GLfloat> value);
WebGLRenderingContextBase.prototype.uniformMatrix2fv = function (location, transpose, value)
{
	//assert((value.length % 4) === 0);
	var count = value.length / 4;
	if (value instanceof Float32Array)
	{
		this.gl.glUniformMatrix2fv(location && location.gl_location, count, transpose, value);
	}
	else if (value instanceof Array)
	{
		this.gl.glUniformMatrix2fv(location && location.gl_location, count, transpose, new Float32Array(value));
	}
}

// void uniformMatrix3fv(WebGLUniformLocation? location, GLboolean transpose, Float32Array value);
// void uniformMatrix3fv(WebGLUniformLocation? location, GLboolean transpose, sequence<GLfloat> value);
WebGLRenderingContextBase.prototype.uniformMatrix3fv = function (location, transpose, value)
{
	//assert((value.length % 9) === 0);
	var count = value.length / 9;
	if (value instanceof Float32Array)
	{
		this.gl.glUniformMatrix3fv(location && location.gl_location, count, transpose, value);
	}
	else if (value instanceof Array)
	{
		this.gl.glUniformMatrix3fv(location && location.gl_location, count, transpose, new Float32Array(value));
	}
}

// void uniformMatrix4fv(WebGLUniformLocation? location, GLboolean transpose, Float32Array value);
// void uniformMatrix4fv(WebGLUniformLocation? location, GLboolean transpose, sequence<GLfloat> value);
WebGLRenderingContextBase.prototype.uniformMatrix4fv = function (location, transpose, value)
{
	//assert((value.length % 16) === 0);
	var count = value.length / 16;
	if (value instanceof Float32Array)
	{
		this.gl.glUniformMatrix4fv(location && location.gl_location, count, transpose, value);
	}
	else if (value instanceof Array)
	{
		this.gl.glUniformMatrix4fv(location && location.gl_location, count, transpose, new Float32Array(value));
	}
}

// void useProgram(WebGLProgram? program);
WebGLRenderingContextBase.prototype.useProgram = function (program)
{
	this.gl.glUseProgram(program && program.gl_program);
}

// void validateProgram(WebGLProgram? program);
WebGLRenderingContextBase.prototype.validateProgram = function (program)
{
	this.gl.glValidateProgram(program && program.gl_program);
}

// void vertexAttrib1f(GLuint indx, GLfloat x);
WebGLRenderingContextBase.prototype.vertexAttrib1f = function (indx, x)
{
	this.gl.glVertexAttrib1f(indx, x);
}

// void vertexAttrib1fv(GLuint indx, Float32Array values);
// void vertexAttrib1fv(GLuint indx, sequence<GLfloat> values);
WebGLRenderingContextBase.prototype.vertexAttrib1fv = function (indx, values)
{
	if (values instanceof Float32Array)
	{
		this.gl.glVertexAttrib1fv(indx, values);
	}
	else if (values instanceof Array)
	{
		this.gl.glVertexAttrib1fv(indx, new Float32Array(values));
	}
}

// void vertexAttrib2f(GLuint indx, GLfloat x, GLfloat y);
WebGLRenderingContextBase.prototype.vertexAttrib2f = function (indx, x, y)
{
	this.gl.glVertexAttrib2f(indx, x, y);
}

// void vertexAttrib2fv(GLuint indx, Float32Array values);
// void vertexAttrib2fv(GLuint indx, sequence<GLfloat> values);
WebGLRenderingContextBase.prototype.vertexAttrib2fv = function (indx, values)
{
	if (values instanceof Float32Array)
	{
		this.gl.glVertexAttrib2fv(indx, values);
	}
	else if (values instanceof Array)
	{
		this.gl.glVertexAttrib2fv(indx, new Float32Array(values));
	}
}

// void vertexAttrib3f(GLuint indx, GLfloat x, GLfloat y, GLfloat z);
WebGLRenderingContextBase.prototype.vertexAttrib3f = function (indx, x, y, z)
{
	this.gl.glVertexAttrib3f(indx, x, y, z);
}

// void vertexAttrib3fv(GLuint indx, Float32Array values);
// void vertexAttrib3fv(GLuint indx, sequence<GLfloat> values);
WebGLRenderingContextBase.prototype.vertexAttrib3fv = function (indx, values)
{
	if (values instanceof Float32Array)
	{
		this.gl.glVertexAttrib3fv(indx, values);
	}
	else if (values instanceof Array)
	{
		this.gl.glVertexAttrib3fv(indx, new Float32Array(values));
	}
}

// void vertexAttrib4f(GLuint indx, GLfloat x, GLfloat y, GLfloat z, GLfloat w);
WebGLRenderingContextBase.prototype.vertexAttrib4f = function (indx, x, y, z, w)
{
	this.gl.glVertexAttrib4f(indx, x, y, z, w);
}

// void vertexAttrib4fv(GLuint indx, Float32Array values);
// void vertexAttrib4fv(GLuint indx, sequence<GLfloat> values);
WebGLRenderingContextBase.prototype.vertexAttrib4fv = function (indx, values)
{
	if (values instanceof Float32Array)
	{
		this.gl.glVertexAttrib4fv(indx, values);
	}
	else if (values instanceof Array)
	{
		this.gl.glVertexAttrib4fv(indx, new Float32Array(values));
	}
}

// void vertexAttribPointer(GLuint indx, GLint size, GLenum type, GLboolean normalized, GLsizei stride, GLintptr offset);
WebGLRenderingContextBase.prototype.vertexAttribPointer = function (index, size, type, normalized, stride, offset)
{
	if (typeof(index) !== 'number')
	{
		return; // TODO
	}
	this.gl.glVertexAttribPointer(index, size, type, normalized, stride, offset);
}

// void viewport(GLint x, GLint y, GLsizei width, GLsizei height);
WebGLRenderingContextBase.prototype.viewport = function (x, y, width, height)
{
	this.gl.glViewport(x, y, width, height);
}

/**
 * @constructor
 * @param {*} gles2
 */
var WebGLRenderingContext = node_webgl.WebGLRenderingContext = function (gles2)
{
	WebGLRenderingContextBase.call(this, gles2);
}

util.inherits(WebGLRenderingContext, WebGLRenderingContextBase);
