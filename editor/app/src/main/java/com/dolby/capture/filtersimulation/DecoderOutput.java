/******************************************************************************
 * The Clear BSD License
 * Copyright (c) 2023 Dolby Laboratories
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted (subject to the limitations in the disclaimer
 * below) provided that the following conditions are met:
 *   - Redistributions of source code must retain the above copyright notice,
 *     this list of conditions and the following disclaimer.
 *   - Redistributions in binary form must reproduce the above copyright notice,
 *     this list of conditions and the following disclaimer in the documentation
 *     and/or other materials provided with the distribution.
 *   - Neither the name of Dolby Laboratories nor the names of its contributors
 *     may be used to endorse or promote products derived from this software
 *     without specific prior written permission.
 *
 * NO EXPRESS OR IMPLIED LICENSES TO ANY PARTY'S PATENT RIGHTS ARE GRANTED BY
 * THIS LICENSE. THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND
 * CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT
 * NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
 * PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
 * OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR
 * OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
 * ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 ******************************************************************************/

package com.dolby.capture.filtersimulation;

import android.content.Context;
import android.media.MediaCodec;
import android.media.MediaFormat;
import android.media.MediaMetadataRetriever;
import android.net.Uri;
import android.util.Log;

import androidx.annotation.NonNull;
import java.beans.PropertyChangeSupport;
import java.io.IOException;

public abstract class DecoderOutput extends Codec {

    private Uri inputUri;

    private long sourceLengthUS;

    private static final long THIRTY_SECONDS_US = 30000000;

    private final PropertyChangeSupport pcs = new PropertyChangeSupport(this);


    public DecoderOutput(Uri inputUri, boolean trim, Context appContext) {
        super(trim, appContext);
        this.inputUri = inputUri;
        MediaMetadataRetriever retriever = new MediaMetadataRetriever();
        retriever.setDataSource(appContext, inputUri);

        this.sourceLengthUS = Integer.parseInt(retriever.extractMetadata(MediaMetadataRetriever.METADATA_KEY_DURATION))*1000;

        Log.e("Decoder output", "DecoderOutput: Duration " + sourceLengthUS);
    }

    public long getVideoLength()
    {
        return sourceLengthUS;
    }

    public Uri getInputUri()
    {
        return this.inputUri;
    }

    public void setCodec(String mime)
    {
        try {
            this.createCodec(MediaCodec.createDecoderByType(mime));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public boolean includePacket(MediaCodec.BufferInfo b) {
        if (!shouldTrim()) {
            return true;
        }

        if(this.sourceLengthUS < THIRTY_SECONDS_US) {
            return true;
        }

        boolean inc = ( (b.presentationTimeUs > TEN_SECONDS_US) && (b.presentationTimeUs < (this.sourceLengthUS - TEN_SECONDS_US)));

        return inc;
    }

    public PropertyChangeSupport getNotifier()
    {
        return this.pcs;
    }

    @Override
    public abstract void onInputBufferAvailable(@NonNull MediaCodec mediaCodec, int i);

    @Override
    public abstract void onOutputBufferAvailable(@NonNull MediaCodec mediaCodec, int i, @NonNull MediaCodec.BufferInfo bufferInfo);

    @Override
    public abstract void onError(@NonNull MediaCodec mediaCodec, @NonNull MediaCodec.CodecException e);

    @Override
    public abstract void onOutputFormatChanged(@NonNull MediaCodec mediaCodec, @NonNull MediaFormat mediaFormat);
}
