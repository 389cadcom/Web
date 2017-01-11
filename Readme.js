http://www.cnblogs.com/Iona/p/5302476.html

http://www.haorooms.com/post/sass_css

http://blog.csdn.net/fungleo/article/details/50851192


��Ϻ�		ռλ��		�̳�
������ʽ	@mixin		%placeholder		.class
���÷�ʽ	@include	@extend
��ɫ		���Դ���	�ϲ�����			�����ã�����������



@chartset 'utf-8';

$color: red blue;
$fontSize: 18px; 

$global: red;


//Ƕ��������Ƕ��  @at-root .child
//@at-root(without: media){}
//@at-root{@keyframes}
#topnav {
	line-height: 40px;
	text-transform: capitalize;
	background: #333;
	li {
		float: left;
	}
	a {
		display: block;
		padding: 0 10px;
		color: #fff;
		&:hover {
			color: #ddd;
		}
	}
}
@media print {
	.parent {
		color: #f00;
		@at-root(without: all) {
			.child {
				width: 20px;
			}
		}
	}
}
.child {
	font-size: 14px;
	@at-root .parent &{
		color: red;
	}
}

//���  @mixin, @include
@mixin ellipsis($width:60px) {
	width: $width;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.loading {
	animation: moina 3s linear;
	@include ellipsis;
	@at-root {
		@keyframes moina {
			form {
				opacity: 0;
			}
			to {
				opacity: 1;
			}
		}
	}
}
@mixin max-screen($res) {
	@media only screen and (max-width: $res) {
		@content;
	}
}
@include max-screen(480px) {
	body {
		background: #ddd;
	}
}
//�̳�
h1 {
	border: 2px solid red;
}
.special {
	@extend h1;
	font-size: 16px;
}
//ռλ��
$ltie7: false;

%ir{
  color: transparent;
  text-shadow: none;
  background-color: transparent;
  border: 0;
}

%clearfix {
	@if $ltie7 {
		*zoom: 1;
	}
	&:before,
	&:after {
		content: '';
		display: table;
		font-size: 0;
		height: 0;
	}
	&:after {
		clear: both;
	}
}
.footer {
	width: 100%;
	background: #000;
	padding: if(true, 1px, 2px);
}
.header{
	@extend %ir;
}
//����
$base: 16px !default;
$gray: #ccc;
@function px2rem($px) {
	@return $px / $base * 1rem;
}
body {
	font-size: $base;
	color: lighten($gray, 10%);
}
.text {
	font-size: px2rem(14px);
	color: darken($gray, 10%);
}

//����
$baseFontSize     : 14px !default;
$baseLineHeight   : 1.5 !default;
$baseGap          : $baseFontSize * $baseLineHeight !default;
$halfBaseGap      : $baseGap / 2 !default;
$samllFontSize    : $baseFontSize - 2px !default;

//grid 
$_columns         : 12 !default;
$_column-width    : 60px !default;
$_gutter          : 20px !default;
$_gridsystem-width: $_columns * ($_column-width + $_gutter);

.banner {
	font-size: $baseFontSize;
}

//�����ж� @if, @else, ��Ŀ @if($condition, $if_true, $if_false)

//@for  through, to
@for $i from 1 through 3{
	.item-#{$i}{
		width: 2em * $i;
	}
}

//@each����  @each $item in $list or $map;	@each $itemi, $item2 in $list  ������
$animal-data: (h1, red, 10px),(h2, blue, 20);
@each $header, $color, $px in $animal-data {
  .#{$header}{
    color: $color;
    margin-right: $px;
  }
}
