/*
font-family: 'Inter', sans-serif;

*/
import { createGlobalStyle } from "styled-components";

const ResetStyle = createGlobalStyle`
html, body, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font: inherit;
		vertical-align: baseline;
	}
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
        user-select: none;
	}
	body {
        font-family: Plus Jakarta Sans;
		line-height: 1;
		
		&::-webkit-scrollbar {
			width: 10px;
		}
		&::-webkit-scrollbar-thumb {
			background-color:purple;
			border-radius: 3px;
		}
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
    body,html{
		height: 100%;
        min-height: 100% !important;
        background-color: transparent;
        scroll-behavior: smooth;
    }

    #root{
        min-height: 100%;
		max-height: fit-content;
		--toastify-color-success: #FFA800 !important;
    }

    input{
        &:focus{
            outline: none;
        }
    }

	.swal2-image{
		object-fit: cover;
	}

    button{
        cursor: pointer;
        user-select: none;
        &:disabled{
            cursor: not-allowed;
        }
    }

    * {
    font-family: 'Inter', sans-serif;
        transition: all 200ms;
        box-sizing: border-box;

    }
`;

export default ResetStyle;